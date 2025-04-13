import * as S from "./FeedItem.styled";

interface FeedItemProps {
  image: string;
  title: string;
  source: string;
  timeAgo: string;
}

export const FeedItem = ({ image, title, source, timeAgo }: FeedItemProps) => {
  return (
    <S.FeedCard>
      <S.FeedImage src={image} alt={title} />
      <S.FeedContent>
        <S.FeedTitle>{title}</S.FeedTitle>
        <S.FeedMeta>
          <S.FeedSource>{source}</S.FeedSource>
          <S.FeedTime>{timeAgo}</S.FeedTime>
        </S.FeedMeta>
      </S.FeedContent>
    </S.FeedCard>
  );
};
