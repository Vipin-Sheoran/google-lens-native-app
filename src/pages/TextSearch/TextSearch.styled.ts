import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  animation: slideUp 0.3s ease-out;
  max-width: 680px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 980px;
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  }

  @media (min-width: 1440px) {
    max-width: 1200px;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const SearchBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
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

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const RecentSearches = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RecentSearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.md};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const SearchHistoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const IncognitoToggle = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

// New components for enhanced search functionality
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const PulsingMic = styled.div`
  animation: ${pulse} 1.5s infinite ease-in-out;
  color: #ea4335; // Google's red color
`;

export const Suggestions = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  strong {
    font-weight: 500;
  }
`;
