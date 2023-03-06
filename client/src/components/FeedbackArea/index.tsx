import { IFeedback } from 'types';
import Panel from '../Panel';
import Feedback from '../Feedback';
import { StyledFeedbackArea } from './styled';

interface FeedbackAreaProps {
  feedback: IFeedback[];
}

const FeedbackArea = ({feedback}: FeedbackAreaProps) => {
  return (
    <StyledFeedbackArea>
      <Panel feedbackNumber={feedback.length} />
      <Feedback feedback={feedback} />
    </StyledFeedbackArea>
  );
};

export default FeedbackArea;
