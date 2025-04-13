import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./TextSearch.styled";
import { IconButton } from "../../components/common/IconButton";
import { MicIcon, ClockIcon, GlobeIcon } from "../../components/common/Icons";
import { Container } from "../../components/common/style";
import { Camera, ChevronLeft, Search, X, Sparkles } from "lucide-react";

// Mock recent searches data
const mockRecentSearches = [
  "sleeveless gilet jacket men india",
  "sequins skirt less than 2000",
  "cut out bodysuit india",
  "floral crop top",
  "black leather skirt with button",
  "neon shirt",
  "oversized women's leather jacket india",
];

// Mock search suggestions
const mockSuggestions = [
  "weather today",
  "restaurants near me",
  "movie showtimes",
  "news headlines",
  "stock market",
  "translate hello to spanish",
  "how tall is mount everest",
];

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

export const TextSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>(
    location.state?.searchQuery || ""
  );
  const [recentSearches, setRecentSearches] = useState(mockRecentSearches);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If we have a search query from voice search, set it
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
      handleSearch(location.state.searchQuery);
    }
  }, [location.state]);

  useEffect(() => {
    // Show clear button only when there's text in the search input
    setShowClearButton(searchQuery.length > 0);

    // Generate suggestions based on search query
    if (searchQuery.length > 0) {
      // Filter mock suggestions to match the query (case insensitive)
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // If we have exact matches, show them, otherwise show some filtered suggestions
      setSuggestions(
        filtered.length > 0 ? filtered : mockSuggestions.slice(0, 3)
      );
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Add to recent searches if not already there
      if (!recentSearches.includes(query)) {
        setRecentSearches([query, ...recentSearches.slice(0, 6)]);
      }
      // Here you would normally navigate to search results
      console.log(`Searching for: ${query}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  const handleVoiceSearch = () => {
    if ("webkitSpeechRecognition" in window) {
      setIsListening(true);

      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      // Fallback if speech recognition isn't supported
      navigate("/voice-search");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleImageSearch = () => {
    navigate("/image-search");
  };

  return (
    <Container>
      <S.Header>
        <S.SearchBar>
          <IconButton onClick={handleBack}>
            <ChevronLeft color="#969ba1" />
          </IconButton>
          <S.SearchInput
            placeholder="Search or type URL"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            ref={inputRef}
          />
          {showClearButton && (
            <IconButton onClick={clearSearch}>
              <X size={20} color="#969ba1" />
            </IconButton>
          )}
          <IconButton onClick={handleVoiceSearch}>
            {isListening ? (
              <S.PulsingMic>
                <MicIcon />
              </S.PulsingMic>
            ) : (
              <MicIcon />
            )}
          </IconButton>
          <IconButton onClick={handleImageSearch}>
            <Camera />
          </IconButton>
        </S.SearchBar>
      </S.Header>

      {searchQuery.length > 0 ? (
        <S.Suggestions>
          {suggestions.map((suggestion, index) => (
            <S.SuggestionItem
              key={index}
              onClick={() => {
                setSearchQuery(suggestion);
                handleSearch(suggestion);
              }}
            >
              <Search size={16} color="#969ba1" />
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(suggestion, searchQuery),
                }}
              />
            </S.SuggestionItem>
          ))}
          <S.SuggestionItem>
            <Sparkles size={16} color="#969ba1" />
            <span>
              Search for <strong>{searchQuery}</strong>
            </span>
          </S.SuggestionItem>
        </S.Suggestions>
      ) : (
        <>
          <S.RecentSearches>
            <S.RecentSearchHeader>
              <h2>Recent searches</h2>
              <button>MANAGE HISTORY</button>
            </S.RecentSearchHeader>
            {recentSearches.map((search, index) => (
              <S.SearchHistoryItem
                key={index}
                onClick={() => {
                  setSearchQuery(search);
                  handleSearch(search);
                }}
              >
                <ClockIcon />
                <span>{search}</span>
              </S.SearchHistoryItem>
            ))}
          </S.RecentSearches>

          <S.IncognitoToggle>
            <GlobeIcon />
            <span>Incognito mode</span>
          </S.IncognitoToggle>
        </>
      )}
    </Container>
  );
};

// Helper function to highlight matching text
const highlightMatch = (text: string, query: string): string => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
};
