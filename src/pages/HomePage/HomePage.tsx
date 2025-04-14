import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./HomePage.styled";
import { IconButton } from "../../components/common/IconButton";
import { SearchIcon, MicIcon } from "../../components/common/Icons";
import {
  Camera,
  GraduationCap,
  Image,
  Languages,
  Moon,
  Music2,
  Waves,
  FlaskConical,
} from "lucide-react";
import { Container, FlexWrapper } from "../../components/common/style";
import GoogleIconLogo from "../../assets/icons/google-icon-logo (1).svg";
import GeminiIcon from "../../assets/icons/gemini-icon.png";
import { FeedItem } from "../../components/FeedItem/FeedItem";
import { Sidebar } from "../../components/Sidebar/Sidebar";

// Mock feed data
const feedData = [
  {
    id: 1,
    image: "https://picsum.photos/id/237/400/200",
    title: "The Future of AI: How Machine Learning is Changing Our World",
    source: "Tech Insights",
    timeAgo: "2h ago",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1025/400/200",
    title: "10 Must-Visit Destinations for Nature Lovers in 2023",
    source: "Travel Guide",
    timeAgo: "5h ago",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1080/400/200",
    title: "Healthy Eating Habits: Simple Ways to Improve Your Diet",
    source: "Health Today",
    timeAgo: "7h ago",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1084/400/200",
    title: "Sustainable Living: Small Changes That Make a Big Difference",
    source: "EcoLife",
    timeAgo: "1d ago",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCameraClick = () => {
    navigate("/image-search");
  };

  const handleSearchClick = () => {
    navigate("/text-search");
  };

  const handleVoiceSearch = () => {
    navigate("/voice-search");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Container>
        <S.Header>
          <IconButton>
            <FlaskConical size={22} />
          </IconButton>
          <S.GeminiIconContainer>
            <S.GoogleIconContainer>
              <img src={GoogleIconLogo} width={18} height={18} alt="Google" />
              Search
            </S.GoogleIconContainer>
            <img
              src={GeminiIcon}
              width={20}
              height={20}
              className="gemini-icon"
              alt="Gemini"
            />
          </S.GeminiIconContainer>
          <S.ProfileButton onClick={toggleSidebar}>A</S.ProfileButton>
        </S.Header>

        <S.GoogleLogoSection>
          <S.GoogleLogoContainer>
            <S.GoogleLogo>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </S.GoogleLogo>
          </S.GoogleLogoContainer>
        </S.GoogleLogoSection>

        <S.SearchContainer>
          <S.SearchBar onClick={handleSearchClick}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <S.SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              readOnly
            />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleVoiceSearch();
              }}
            >
              <MicIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleCameraClick();
              }}
            >
              <Camera />
            </IconButton>
          </S.SearchBar>
        </S.SearchContainer>

        <S.QuickActions>
          <S.ActionButton $bgColor="#474627" opacity={0.6} padding="16px 24px">
            <Image color="#f5e91d" size={18} />
          </S.ActionButton>
          <S.ActionButton $bgColor="#9bc1fa" opacity={0.6} padding="16px 24px">
            <Languages color="#0b336e" size={18} />
          </S.ActionButton>
          <S.ActionButton $bgColor="#8bcca8" padding="16px 24px">
            <GraduationCap color="#054d25" size={18} />
          </S.ActionButton>
          <S.ActionButton $bgColor="#f5c6d3" padding="16px 24px">
            <Music2 color="#911939" size={18} />
          </S.ActionButton>
        </S.QuickActions>

        <S.WeatherContainer>
          <S.WeatherWidget>
            <div className="location">Gurugram</div>
            <FlexWrapper justifyContent="space-between" flexDirection="row">
              <div className="temperature">30°</div>
              <div className="status">
                <Moon />
              </div>
            </FlexWrapper>
          </S.WeatherWidget>
          <S.WeatherWidget>
            <div className="location">Air Quality ・ 170</div>
            <FlexWrapper justifyContent="space-between" flexDirection="row">
              <div className="temperature">Moderate</div>
              <div className="status">
                <Waves />
              </div>
            </FlexWrapper>
          </S.WeatherWidget>
        </S.WeatherContainer>

        <S.FeedsSection>
          <S.FeedsHeader>
            <h2>Discover</h2>
          </S.FeedsHeader>
          <S.FeedsGrid>
            {feedData.map((feed) => (
              <FeedItem
                key={feed.id}
                image={feed.image}
                title={feed.title}
                source={feed.source}
                timeAgo={feed.timeAgo}
              />
            ))}
          </S.FeedsGrid>
        </S.FeedsSection>
      </Container>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isSidebarOpen && (
        <S.SidebarOverlay onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};
