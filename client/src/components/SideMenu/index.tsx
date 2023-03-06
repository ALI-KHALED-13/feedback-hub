import { useState, useEffect } from 'react';
import { ITag } from 'types';
import TagsFilter from '../TagsFilter';
import RoadmapInfo from '../RoadmapInfo';
import {
  StyledSideMenu,
  StyledProductNameWrapper,
  StyledProductTitle,
  StyledMenuText,
} from './styled';
import { statuses } from '../../data';

interface SideMenuProps {
  productTitle: string;
}

const SideMenu = ({productTitle}: SideMenuProps) => {

  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch(`/api/tags`);
      const json = await response.json() as ITag[];

      if (response.ok) {
        // console.log(json);
        setTags(json);
      }
    };

    fetchTags();
  }, []);

  return (
    <StyledSideMenu>

      <StyledProductNameWrapper>
        <StyledProductTitle>{productTitle}</StyledProductTitle>
        <StyledMenuText>Feedback Board</StyledMenuText>
      </StyledProductNameWrapper>

      <TagsFilter tags={tags} />
      <RoadmapInfo statuses={statuses} />
      
    </StyledSideMenu>
  );
};

export default SideMenu;
