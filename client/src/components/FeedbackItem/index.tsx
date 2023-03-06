import { IFeedback } from 'types';
import {
  StyledFeedbackItem,
  StyledFeedbackTitle,
  StyledFeedbackDescription,
  StyledCommmentSection,
  StyledCommentsNumber,
} from './styled';

// The component is not ready yet

interface FeedbackItemProps {
  feedbackItem: IFeedback;
}

const FeedbackItem = ({feedbackItem}: FeedbackItemProps) => {
  return (
    <StyledFeedbackItem>
      {/* <Upvote /> */}
      <div>{feedbackItem.upvotes.length}</div>
      <StyledFeedbackTitle>{feedbackItem.title}</StyledFeedbackTitle>
      <StyledFeedbackDescription>{feedbackItem.description}</StyledFeedbackDescription>
      <StyledCommmentSection>
        {/* <img alt="comments" src={comments}> */}
        <StyledCommentsNumber>{feedbackItem.comments.length}</StyledCommentsNumber>
      </StyledCommmentSection>
    </StyledFeedbackItem>
  );
};

export default FeedbackItem;
