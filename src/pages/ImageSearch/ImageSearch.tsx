import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../components/common/IconButton";
import { CameraIcon, GalleryIcon } from "../../components/common/Icons";
import * as S from "./ImageSearch.styled";
import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import {
  ChevronLeft,
  Search,
  Image,
  Scan,
  FileX,
  AlertCircle,
} from "lucide-react";
import { Container } from "../../components/common/style";

export const ImageSearch = () => {
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mode, setMode] = useState<"options" | "camera" | "gallery">("options");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = async () => {
    if (mode !== "options") {
      setMode("options");
      setCapturedImage(null);
      setError(null);
    } else {
      await Haptics.impact({ style: ImpactStyle.Light });
      navigate(-1);
    }
  };

  const takePicture = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
      setMode("camera");
      setIsLoading(true);
      setError(null);

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        promptLabelHeader: "Take a photo to search",
        promptLabelCancel: "Cancel",
        promptLabelPhoto: "Search",
      });

      setIsLoading(false);

      if (image.dataUrl) {
        setCapturedImage(image.dataUrl);
        setIsAnalyzing(true);
        await Haptics.notification({ type: NotificationType.Success });

        setTimeout(() => {
          setIsAnalyzing(false);
          navigate("/image-results", {
            state: {
              imageUrl: image.dataUrl,
              results: getMockResults(),
            },
          });
        }, 2000);
      } else {
        setMode("options");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error taking picture:", error);
      setError("Could not access camera. Please check your permissions.");
      await Haptics.notification({ type: NotificationType.Error });
      setMode("options");
    }
  };

  const selectFromGallery = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
      setMode("gallery");
      setIsLoading(true);
      setError(null);

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        promptLabelHeader: "Choose an image to search",
        promptLabelCancel: "Cancel",
        promptLabelPhoto: "Search",
      });

      setIsLoading(false);

      if (image.dataUrl) {
        setCapturedImage(image.dataUrl);
        setIsAnalyzing(true);
        await Haptics.notification({ type: NotificationType.Success });

        // Simulate analysis delay
        setTimeout(() => {
          setIsAnalyzing(false);
          navigate("/image-results", {
            state: {
              imageUrl: image.dataUrl,
              results: getMockResults(),
            },
          });
        }, 2000);
      } else {
        setMode("options");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error selecting image:", error);
      setError("Could not access gallery. Please check your permissions.");
      await Haptics.notification({ type: NotificationType.Error });
      setMode("options");
    }
  };

  const getMockResults = () => [
    {
      type: "visualMatch",
      title: "Blue ceramic coffee mug",
      confidence: 0.95,
      images: [
        "https://picsum.photos/id/225/400/300",
        "https://picsum.photos/id/326/400/300",
        "https://picsum.photos/id/30/400/300",
      ],
      shops: [
        { name: "CeramicStore", price: "$24.99" },
        { name: "MugShop", price: "$19.99" },
        { name: "HomeGoods", price: "$22.99" },
      ],
    },
    {
      type: "textInImage",
      text: ["COFFEE", "Handcrafted", "Ceramic"],
      translations: [
        { language: "Spanish", text: "CAFÉ" },
        { language: "French", text: "CAFÉ" },
      ],
    },
    {
      type: "similarImages",
      images: [
        "https://picsum.photos/id/431/400/300",
        "https://picsum.photos/id/766/400/300",
        "https://picsum.photos/id/425/400/300",
      ],
    },
  ];

  return (
    <Container>
      <S.Header>
        <IconButton onClick={handleBack}>
          <ChevronLeft color="#969ba1" />
        </IconButton>
        {mode === "options" && <S.HeaderTitle>Google Lens</S.HeaderTitle>}
      </S.Header>

      <S.Content>
        {isAnalyzing ? (
          <S.AnalyzingOverlay>
            <S.GoogleDots>
              <S.Dot $delay={0} />
              <S.Dot $delay={0.2} />
              <S.Dot $delay={0.4} />
              <S.Dot $delay={0.6} />
            </S.GoogleDots>
            <S.AnalyzingText>Analyzing image...</S.AnalyzingText>
          </S.AnalyzingOverlay>
        ) : isLoading ? (
          <S.LoadingContainer>
            <S.GoogleDots>
              <S.Dot $delay={0} />
              <S.Dot $delay={0.2} />
              <S.Dot $delay={0.4} />
              <S.Dot $delay={0.6} />
            </S.GoogleDots>
            <S.LoadingText>Loading camera...</S.LoadingText>
          </S.LoadingContainer>
        ) : error ? (
          <S.ErrorContainer>
            <AlertCircle size={48} color="#EA4335" />
            <S.ErrorText>{error}</S.ErrorText>
            <S.RetryButton onClick={() => setError(null)}>
              Try Again
            </S.RetryButton>
          </S.ErrorContainer>
        ) : mode === "options" ? (
          <>
            <S.LogoContainer>
              <S.LensLogo>
                <Search size={24} color="#4285F4" />
                <S.ColoredDot color="#EA4335" />
                <S.ColoredDot color="#FBBC05" />
                <S.ColoredDot color="#34A853" />
              </S.LensLogo>
            </S.LogoContainer>

            <S.ActionButtons>
              <S.ActionButton onClick={takePicture}>
                <CameraIcon />
                <span>Take a picture</span>
              </S.ActionButton>
              <S.ActionButton onClick={selectFromGallery}>
                <GalleryIcon />
                <span>Choose from gallery</span>
              </S.ActionButton>
            </S.ActionButtons>

            <S.Instructions>
              <h2>Search with your camera</h2>
              <ul>
                <li>Find similar items to buy</li>
                <li>Copy and translate text</li>
                <li>Identify plants and animals</li>
                <li>Solve math problems</li>
              </ul>
            </S.Instructions>
          </>
        ) : (
          <S.CameraContainer>
            {capturedImage && (
              <S.CapturedImage src={capturedImage} alt="Captured" />
            )}
            <S.CameraControls>
              <S.ModeButton>
                <Search size={20} />
                <span>Search</span>
              </S.ModeButton>
              <S.ModeButton>
                <Image size={20} />
                <span>Text</span>
              </S.ModeButton>
              <S.ModeButton>
                <Scan size={20} />
                <span>Shopping</span>
              </S.ModeButton>
              <S.FlashButton>
                <FileX size={20} />
              </S.FlashButton>
            </S.CameraControls>
          </S.CameraContainer>
        )}
      </S.Content>
    </Container>
  );
};
