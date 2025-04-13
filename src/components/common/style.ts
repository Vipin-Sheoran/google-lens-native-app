import styled from "styled-components";

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: hidden;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export const FlexWrapper = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
`;
