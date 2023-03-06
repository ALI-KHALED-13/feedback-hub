import { IFeedback } from 'types';
import FeedbackItem from '../FeedbackItem';
import NoFeedback from '../NoFeedback';
import { StyledFeedback } from './styled';

interface FeedbackProps {
  feedback: IFeedback[];
}

const Feedback = ({feedback}: FeedbackProps) => {
  // for testing purposes
  // feedback.length = 0; 

  return (
    feedback.length > 0
      ? <StyledFeedback>
          {feedback.map((feedbackItem) => <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem._id} />)}
        </StyledFeedback>
      : <NoFeedback
          text="Got a suggestion? Found a bug that needs to be squashed?
                We love hearing about new ideas to improve our app."
        />
  );
};

export default Feedback;
