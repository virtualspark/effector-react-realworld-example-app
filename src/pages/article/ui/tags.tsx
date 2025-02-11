import { TagsWrapper, Tag } from 'shared/ui';
import { selectors } from '../model';

export const Tags: React.FC = () => {
  const { tagList } = selectors.useArticle();

  return (
    <TagsWrapper>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag.toLowerCase()}</Tag>
      ))}
    </TagsWrapper>
  );
};
