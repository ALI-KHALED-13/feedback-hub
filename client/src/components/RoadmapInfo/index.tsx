import { IStatus } from 'types';
import {
  StyledRoadmapInfo,
  StyledRoadmapHeader,
  StyledRoadmapHeading,
  StyledLink,
  StyledStatusList,
  StyledStatusItem,
  StyledStatusName,
  StyledStatusNumber,
} from './styled';

interface RoadmapInfoProps {
  statuses: IStatus[];
}

const RoadmapInfo = ({statuses}: RoadmapInfoProps) => {
  return (
    <StyledRoadmapInfo>

      <StyledRoadmapHeader>
        <StyledRoadmapHeading>Roadmap</StyledRoadmapHeading>
        <StyledLink to="/roadmap">View</StyledLink>
      </StyledRoadmapHeader>

      <StyledStatusList>
        {statuses.map((status) => {
          return (
            <StyledStatusItem key={status._id}>
              <StyledStatusName color={status.color}>{status.name}</StyledStatusName>
              <StyledStatusNumber>{status.reviewsNumber}</StyledStatusNumber>
            </StyledStatusItem>
          );
        })}
      </StyledStatusList>
      
    </StyledRoadmapInfo>
  );
};

export default RoadmapInfo;
