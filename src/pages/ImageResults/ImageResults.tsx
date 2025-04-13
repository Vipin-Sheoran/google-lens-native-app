import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../components/common/IconButton";
import { ShareIcon } from "../../components/common/Icons";
import * as S from "./ImageResults.styled";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Share } from "@capacitor/share";
import { Container } from "../../components/common/style";
import {
  ChevronLeft,
  Copy,
  Languages,
  ShoppingBag,
  Search,
} from "lucide-react";

interface SearchResult {
  type: "visualMatch" | "textInImage" | "similarImages";
  title?: string;
  confidence?: number;
  images?: string[];
  shops?: Array<{ name: string; price: string }>;
  text?: string[];
  translations?: Array<{ language: string; text: string }>;
}

export const ImageResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl, results } = location.state as {
    imageUrl: string;
    results: SearchResult[];
  };

  const handleBack = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    navigate(-1);
  };

  const handleShare = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    await Share.share({
      title: "Image Search Results",
      text: "Check out what I found with Google Lens!",
      url: imageUrl,
    });
  };

  const handleCopy = async (text: string) => {
    await Haptics.impact({ style: ImpactStyle.Light });
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <Container>
      <S.Header>
        <IconButton onClick={handleBack}>
          <ChevronLeft color="#969ba1" />
        </IconButton>
        <IconButton onClick={handleShare}>
          <ShareIcon />
        </IconButton>
      </S.Header>

      <S.Content>
        <S.QueryImageContainer>
          <S.QueryImage src={imageUrl} alt="Search query" />
          <S.ActionOverlay>
            <S.ActionButton>
              <Search size={18} />
              <span>Visual matches</span>
            </S.ActionButton>
            <S.ActionButton>
              <ShoppingBag size={18} />
              <span>Shopping</span>
            </S.ActionButton>
            <S.ActionButton>
              <Languages size={18} />
              <span>Translate</span>
            </S.ActionButton>
          </S.ActionOverlay>
        </S.QueryImageContainer>

        {results.map((result, index) => {
          if (result.type === "visualMatch" && result.title) {
            return (
              <S.Section key={index}>
                <S.SectionTitle>
                  <ShoppingBag size={18} />
                  <span>Visual matches</span>
                </S.SectionTitle>
                <S.VisualMatch>
                  <S.MatchHeader>
                    <h3>{result.title}</h3>
                    <S.Confidence>
                      {Math.round(result.confidence! * 100)}% match
                    </S.Confidence>
                  </S.MatchHeader>
                  <S.ImageGrid>
                    {result.images?.map((img, i) => (
                      <S.ResultImage
                        key={i}
                        src={img}
                        alt={`Similar item ${i + 1}`}
                      />
                    ))}
                  </S.ImageGrid>
                  {result.shops && (
                    <S.ShopList>
                      <S.ShopListHeader>Buy this item</S.ShopListHeader>
                      {result.shops.map((shop, i) => (
                        <S.ShopItem key={i}>
                          <span>{shop.name}</span>
                          <span>{shop.price}</span>
                        </S.ShopItem>
                      ))}
                    </S.ShopList>
                  )}
                </S.VisualMatch>
              </S.Section>
            );
          }

          if (result.type === "textInImage" && result.text) {
            return (
              <S.Section key={index}>
                <S.SectionTitle>
                  <Copy size={18} />
                  <span>Text found in image</span>
                </S.SectionTitle>
                <S.TextResults>
                  <S.DetectedText>
                    {result.text.map((text, i) => (
                      <S.TextChip key={i} onClick={() => handleCopy(text)}>
                        {text}
                        <Copy size={14} />
                      </S.TextChip>
                    ))}
                  </S.DetectedText>
                  {result.translations && (
                    <S.Translations>
                      <S.TranslationsHeader>
                        <Languages size={16} />
                        <span>Translations</span>
                      </S.TranslationsHeader>
                      {result.translations.map((translation, i) => (
                        <S.Translation key={i}>
                          <span>{translation.language}:</span>
                          <span>{translation.text}</span>
                        </S.Translation>
                      ))}
                    </S.Translations>
                  )}
                </S.TextResults>
              </S.Section>
            );
          }

          if (result.type === "similarImages" && result.images) {
            return (
              <S.Section key={index}>
                <S.SectionTitle>
                  <Search size={18} />
                  <span>Similar images</span>
                </S.SectionTitle>
                <S.ImageGrid>
                  {result.images.map((img, i) => (
                    <S.ResultImage
                      key={i}
                      src={img}
                      alt={`Similar image ${i + 1}`}
                    />
                  ))}
                </S.ImageGrid>
              </S.Section>
            );
          }

          return null;
        })}
      </S.Content>
    </Container>
  );
};
