import TagsFilter from "../TagsFilter";
import RoadmapInfo from "../RoadmapInfo";
import { StyledSideMenu, StyledProductNameWrapper, StyledProductName, StyledMenuText } from "./styled";
import { ITag, IStatus } from "types";
import { useTheme } from "styled-components";

type SideMenuProps = {
  productName: string;
}

const SideMenu = ({productName}: SideMenuProps) => {

  const theme = useTheme();

  // hardcoded for now
  const tags: ITag[] = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'UI',
      reviewsNumber: 5,
    },
    {
      id: 3,
      name: 'UX',
      reviewsNumber: 1,
    },
    {
      id: 4,
      name: 'Enhancement',
      reviewsNumber: 2,
    },
    {
      id: 5,
      name: 'Bug',
      reviewsNumber: 1,
    },
    {
      id: 6,
      name: 'Feature',
      reviewsNumber: 1,
    },
  ];

  // hardcoded
  const statuses: IStatus[] = [
    {
      id: 1,
      name: 'Planned',
      reviewsNumber: 2,
      color: theme.peach,
    },
    {
      id: 2,
      name: 'In-Progress',
      reviewsNumber: 3,
      color: theme.violet,
    },
    {
      id: 3,
      name: 'Live',
      reviewsNumber: 1,
      color: theme.blue,
    }
  ];

  return <StyledSideMenu>
    <StyledProductNameWrapper>
      <StyledProductName>{productName}</StyledProductName>
      <StyledMenuText>Feedback Board</StyledMenuText>
    </StyledProductNameWrapper>
    <TagsFilter tags={tags} />
    <RoadmapInfo statuses={statuses} />
  </StyledSideMenu>
};

export default SideMenu;