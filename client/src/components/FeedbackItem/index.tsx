import { IFeedback } from "types";
import {
  StyledFeedbackItem,
  StyledFeedbackTitle,
  StyledFeedbackDescription,
  StyledCommmentSection,
  StyledCommentsNumber,
} from "./styled";

type FeedbackItemProps = {
  feedback: IFeedback;
};

const FeedbackItem = ({feedback}: FeedbackItemProps) => {
  <StyledFeedbackItem>
    {/* <Upvote /> */}
    <StyledFeedbackTitle>{feedback.title}</StyledFeedbackTitle>
    <StyledFeedbackDescription>{feedback.description}</StyledFeedbackDescription>
    <StyledCommmentSection>
      {/* <img alt="comments" src={comments}> */}
      <StyledCommentsNumber>4</StyledCommentsNumber>
    </StyledCommmentSection>
  </StyledFeedbackItem>
};

export default FeedbackItem;
