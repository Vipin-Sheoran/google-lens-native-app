import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  animation: ${fadeIn} 0.3s ease-out;
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
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const QueryImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const QueryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const ActionOverlay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md};
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.2s ease;
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 70%;
    }
  }

  &:hover::after {
    width: 50%;
  }
`;

export const Section = styled.section<{ $delay?: number }>`
  animation: ${({ $delay = 0 }) =>
    css`
      ${fadeIn} 0.3s ease-out ${$delay}s forwards
    `};
  opacity: 0;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const VisualMatch = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const MatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }

  @media (max-width: 768px) {
    h3 {
      font-size: ${({ theme }) => theme.typography.sizes.sm};
    }
  }
`;

export const Confidence = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ResultImage = styled.img<{ $delay?: number }>`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: transform 0.2s;
  opacity: 0;
  animation: ${({ $delay = 0 }) =>
    css`
      ${fadeIn} 0.3s ease-out ${$delay}s forwards
    `};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ShopList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ShopListHeader = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ShopItem = styled.div<{ $delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  opacity: 0;
  animation: ${({ $delay = 0 }) =>
    css`
      ${slideIn} 0.3s ease-out ${$delay}s forwards
    `};
`;

export const TextResults = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const DetectedText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TextChip = styled.button<{ $delay?: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  border: none;
  cursor: pointer;
  position: relative;
  opacity: 0;
  animation: ${({ $delay = 0 }) =>
    css`
      ${fadeIn} 0.3s ease-out ${$delay}s forwards
    `};

  svg {
    opacity: 0.6;
  }

  &:hover svg {
    opacity: 1;
  }

  &.copied {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CopiedIndicator = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 10px;
  white-space: nowrap;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.accent} transparent transparent
      transparent;
  }
`;

export const Translations = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const TranslationsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Translation = styled.div<{ $delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  opacity: 0;
  animation: ${({ $delay = 0 }) =>
    css`
      ${slideIn} 0.3s ease-out ${$delay}s forwards
    `};

  span:first-child {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const LoadingResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  height: 200px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  animation: ${fadeIn} 0.3s ease-out;
`;

export const GoogleDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: ${({ $delay }) => css`
    ${keyframes`
      0% { transform: translateY(0); }
      25% { transform: translateY(-10px); }
      50% { transform: translateY(0); }
    `} 1.5s ease-in-out infinite ${$delay}s
  `};

  &:nth-child(1) {
    background-color: #4285f4;
  }
  &:nth-child(2) {
    background-color: #ea4335;
  }
  &:nth-child(3) {
    background-color: #fbbc05;
  }
  &:nth-child(4) {
    background-color: #34a853;
  }
`;

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.md};
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
