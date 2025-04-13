import styled from "styled-components";

export const FeedCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const FeedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const FeedContent = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

export const FeedTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const FeedMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeedSource = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FeedTime = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
