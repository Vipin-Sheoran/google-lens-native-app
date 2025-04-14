import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../components/common/IconButton";
import { ShareIcon } from "../../components/common/Icons";
import * as S from "./ImageResults.styled";
import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import { Share } from "@capacitor/share";
import { Container } from "../../components/common/style";
import {
  ChevronLeft,
  Copy,
  Languages,
  ShoppingBag,
  Search,
  Heart,
  MessageSquare,
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

interface LocationState {
  imageUrl?: string;
  results?: SearchResult[];
}

export const ImageResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loadingItems, setLoadingItems] = useState(true);
  const [selectedTab, setSelectedTab] = useState<
    "visual" | "shopping" | "translate"
  >("visual");
  const [copied, setCopied] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const state = location.state as LocationState;
  const imageUrl = state?.imageUrl || "";
  const results = state?.results || [];

  useEffect(() => {
    // Simulate loading delay for better UX
    const loadingTimer = setTimeout(() => {
      setLoadingItems(false);
    }, 600);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Clear "Copied" notification after 2 seconds
    if (copied) {
      const timer = setTimeout(() => setCopied(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleBack = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    navigate(-1);
  };

  const handleShare = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
      await Share.share({
        title: "Check out what I found with Google Lens",
        text: "I found this using Google Lens",
        url: imageUrl,
        dialogTitle: "Share your discovery",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
      await navigator.clipboard.writeText(text);
      setCopied(text);
      await Haptics.notification({ type: NotificationType.Success });
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const toggleFavorite = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <S.Header>
        <IconButton onClick={handleBack}>
          <ChevronLeft color="#969ba1" />
        </IconButton>
        <div>
          <IconButton onClick={toggleFavorite}>
            <Heart
              color={isFavorite ? "#EA4335" : "#969ba1"}
              fill={isFavorite ? "#EA4335" : "none"}
            />
          </IconButton>
          <IconButton onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        </div>
      </S.Header>

      <S.Content>
        <S.QueryImageContainer>
          <S.QueryImage src={imageUrl} alt="Search query" loading="eager" />
          <S.ActionOverlay>
            <S.ActionButton
              onClick={() => setSelectedTab("visual")}
              className={selectedTab === "visual" ? "active" : ""}
            >
              <Search size={18} />
              <span>Visual matches</span>
            </S.ActionButton>
            <S.ActionButton
              onClick={() => setSelectedTab("shopping")}
              className={selectedTab === "shopping" ? "active" : ""}
            >
              <ShoppingBag size={18} />
              <span>Shopping</span>
            </S.ActionButton>
            <S.ActionButton
              onClick={() => setSelectedTab("translate")}
              className={selectedTab === "translate" ? "active" : ""}
            >
              <Languages size={18} />
              <span>Translate</span>
            </S.ActionButton>
          </S.ActionOverlay>
        </S.QueryImageContainer>

        {loadingItems ? (
          <S.LoadingResults>
            <S.GoogleDots>
              <S.Dot $delay={0} />
              <S.Dot $delay={0.2} />
              <S.Dot $delay={0.4} />
              <S.Dot $delay={0.6} />
            </S.GoogleDots>
            <div>Finding results...</div>
          </S.LoadingResults>
        ) : (
          results.map((result, index) => {
            // Visual matches section
            if (
              result.type === "visualMatch" &&
              result.title &&
              (selectedTab === "visual" || selectedTab === "shopping")
            ) {
              return (
                <S.Section key={index} $delay={index * 0.1}>
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
                          loading="lazy"
                          $delay={i * 0.1}
                        />
                      ))}
                    </S.ImageGrid>
                    {result.shops && (
                      <S.ShopList>
                        <S.ShopListHeader>Buy this item</S.ShopListHeader>
                        {result.shops.map((shop, i) => (
                          <S.ShopItem key={i} $delay={i * 0.1}>
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

            // Text in image section
            if (
              result.type === "textInImage" &&
              result.text &&
              (selectedTab === "visual" || selectedTab === "translate")
            ) {
              return (
                <S.Section key={index} $delay={index * 0.1}>
                  <S.SectionTitle>
                    <Copy size={18} />
                    <span>Text found in image</span>
                  </S.SectionTitle>
                  <S.TextResults>
                    <S.DetectedText>
                      {result.text.map((text, i) => (
                        <S.TextChip
                          key={i}
                          onClick={() => handleCopy(text)}
                          $delay={i * 0.1}
                          className={copied === text ? "copied" : ""}
                        >
                          {text}
                          <Copy size={14} />
                          {copied === text && (
                            <S.CopiedIndicator>Copied!</S.CopiedIndicator>
                          )}
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
                          <S.Translation key={i} $delay={i * 0.1}>
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

            // Similar images section
            if (
              result.type === "similarImages" &&
              result.images &&
              selectedTab === "visual"
            ) {
              return (
                <S.Section key={index} $delay={index * 0.1}>
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
                        loading="lazy"
                        $delay={i * 0.1}
                      />
                    ))}
                  </S.ImageGrid>
                </S.Section>
              );
            }

            return null;
          })
        )}

        <S.FeedbackButton>
          <MessageSquare size={16} />
          <span>Send feedback</span>
        </S.FeedbackButton>
      </S.Content>
    </Container>
  );
};
