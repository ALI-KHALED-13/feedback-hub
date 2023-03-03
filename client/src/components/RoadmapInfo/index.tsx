import { Heading3 } from "../Typo";
import {
  StyledRoadmapInfo,
  StyledRoadmapHeader,
  StyledLink,
  StyledStatusList,
  StyledStatusItem,
  StyledStatusName,
  StyledStatusNumber,
} from "./styled";
import { Link } from "react-router-dom";
import { IStatus } from "types";

type RoadmapInfoProps = {
  statuses: IStatus[];
}

const RoadmapInfo = ({statuses}: RoadmapInfoProps) => {
  return (
    <StyledRoadmapInfo>
      <StyledRoadmapHeader>
        <Heading3>Roadmap</Heading3>
        <StyledLink as={Link} to="/roadmap">View</StyledLink>
      </StyledRoadmapHeader>
      <StyledStatusList>
        {statuses.map((status) => {
          return (
            <StyledStatusItem key={status.id}>
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
