import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./VoiceSearch.styled";
import { IconButton } from "../../components/common/IconButton";
import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import { ChevronLeft, Globe, Music2, Mic } from "lucide-react";
import { Container } from "../../components/common/style";

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (event: Event) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
  onend: (event: Event) => void;
  start(): void;
  stop(): void;
  abort(): void;
}

export const VoiceSearch = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    startVoiceRecognition();
    // Trigger haptic feedback when starting to listen
    Haptics.impact({ style: ImpactStyle.Light });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const startVoiceRecognition = () => {
    setIsListening(true);
    Haptics.impact({ style: ImpactStyle.Medium });

    // Use the correct SpeechRecognition constructor
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      Haptics.impact({ style: ImpactStyle.Medium });
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const results = Array.from(
        { length: event.results.length },
        (_, i) => event.results[i][0].transcript
      );
      const currentTranscript = results.join(" ");
      setTranscript(currentTranscript);
    };

    recognition.onerror = () => {
      console.error("Speech recognition error");
      setIsListening(false);
      Haptics.notification({ type: NotificationType.Warning });
    };

    recognition.onend = () => {
      setIsListening(false);
      if (transcript) {
        // Navigate to search results with the transcript
        navigate("/search", { state: { searchQuery: transcript } });
      }
    };

    recognition.start();
  };

  return (
    <Container>
      <S.Header>
        <IconButton onClick={handleBack}>
          <ChevronLeft color="#969ba1" />
        </IconButton>
        <IconButton>
          <Globe color="#969ba1" size={20} />
        </IconButton>
      </S.Header>

      <S.ListeningContainer>
        <S.ListeningText>{transcript || "Speak now"}</S.ListeningText>

        <S.VoiceIndicator $isListening={isListening}>
          <Mic color="#ffffff" />
        </S.VoiceIndicator>

        <S.GoogleDots>
          <S.Dot $delay={0} />
          <S.Dot $delay={0.2} />
          <S.Dot $delay={0.4} />
          <S.Dot $delay={0.6} />
        </S.GoogleDots>
      </S.ListeningContainer>

      <S.SearchButton onClick={handleBack}>
        <Music2 color="#969ba1" size={20} />
        <span>Search a song</span>
      </S.SearchButton>
    </Container>
  );
};
