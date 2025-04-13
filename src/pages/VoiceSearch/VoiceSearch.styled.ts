import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const dotAnimation = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
`;

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ListeningContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

export const ListeningText = styled.div`
  font-size: clamp(24px, 5vw, 32px);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  text-align: center;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 380px) {
    font-size: 20px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const VoiceIndicator = styled.div<{ $isListening: boolean }>`
  width: clamp(60px, 10vw, 80px);
  height: clamp(60px, 10vw, 80px);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  animation: ${({ $isListening }) => ($isListening ? pulseAnimation : "none")}
    1.5s ease-in-out infinite;

  svg {
    width: 50%;
    height: 50%;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const GoogleDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Dot = styled.div<{ $delay: number }>`
  width: clamp(6px, 1.5vw, 8px);
  height: clamp(6px, 1.5vw, 8px);
  border-radius: 50%;
  background-color: currentColor;
  animation: ${dotAnimation} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  &:nth-child(1) {
    color: #4285f4;
  }
  &:nth-child(2) {
    color: #ea4335;
  }
  &:nth-child(3) {
    color: #fbbc05;
  }
  &:nth-child(4) {
    color: #34a853;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  bottom: max(${({ theme }) => theme.spacing.xl}, 5vh);
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  white-space: nowrap;
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  @media (max-width: 380px) {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    bottom: ${({ theme }) => theme.spacing.lg};
  }
`;
