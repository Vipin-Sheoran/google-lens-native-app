import styled, { keyframes } from "styled-components";

const dotAnimation = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
`;

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

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 500;
  flex: 1;
  text-align: center;
  margin-right: 40px; /* Offset for the back button */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const LensLogo = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ColoredDot = styled.div<{ color: string }>`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  &:nth-of-type(1) {
    top: 15px;
    right: 15px;
  }

  &:nth-of-type(2) {
    bottom: 15px;
    right: 15px;
  }

  &:nth-of-type(3) {
    bottom: 15px;
    left: 15px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 320px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const Instructions = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  animation: ${fadeIn} 0.3s ease-out 0.2s backwards;

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.typography.sizes.md};
    }

    li {
      font-size: ${({ theme }) => theme.typography.sizes.sm};
    }
  }
`;

export const AnalyzingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  animation: ${fadeIn} 0.3s ease-out;
`;

export const AnalyzingText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }
`;

export const GoogleDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: ${dotAnimation} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

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

export const CameraContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 150px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CapturedImage = styled.img`
  width: 100%;
  max-height: calc(100vh - 200px);
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const CameraControls = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin: 0 auto;
  max-width: 350px;
`;

export const ModeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const FlashButton = styled.button`
  color: white;
  padding: ${({ theme }) => theme.spacing.xs};
`;
