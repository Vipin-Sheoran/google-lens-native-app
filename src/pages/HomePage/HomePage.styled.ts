import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const GeminiIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  .gemini-icon {
    margin-left: 6px;
  }
`;

export const GoogleIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;

export const GoogleLogoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const GoogleLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoogleLogo = styled.div`
  font-size: 65px;
  font-weight: 500;
  letter-spacing: -3px;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 52px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SearchBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  outline: none;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ProfileButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 90%;
  background-color: #4285f4;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`;

export const QuickActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ActionButton = styled.button<{
  $bgColor: string;
  opacity?: number;
  padding?: string;
}>`
  background-color: ${(props) => props.$bgColor};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  aspect-ratio: 1;
  padding: ${(props) => props.padding || "8px"};
  opacity: ${(props) => props.opacity || 1};
  transition: opacity 0.2s, transform 0.2s;
  height: 48px;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const WeatherWidget = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};

  .location {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .temperature {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    font-weight: 500;
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FeedsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FeedsHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.typography.sizes.md};
    }
  }
`;

export const FeedsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
