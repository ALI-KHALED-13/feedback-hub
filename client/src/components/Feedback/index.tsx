import { useTheme } from "styled-components";
import { IFeedback } from "types";
import Button from "../Button";
import FeedbackItem from "../FeedbackItem";
import { Heading1, StyledParagraph1 } from "../Typo";
import { StyledFeedback, StyledFeedbackWrapper } from "./styled";

import spy from '../../images/spy.svg';

type FeedbackProps = {
  feedbacks: IFeedback[];
};

const Feedback = ({feedbacks}: FeedbackProps) => {
  const theme = useTheme();

  return (
    feedbacks.length > 0
      ? <StyledFeedback>
          {feedbacks.map((feedback) => <FeedbackItem feedback={feedback} key={feedback.id} />)}
        </StyledFeedback>
      : <StyledFeedbackWrapper>
          <img style={{marginBottom: '4.8rem'}} alt="spy" src={spy} width="130px" />
          <Heading1 as="p" style={{marginBottom: '1.6rem'}}>There is no feedback yet.</Heading1>
          <StyledParagraph1 style={{marginBottom: '4.8rem', width: '41rem'}}>
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </StyledParagraph1>
          <Button color={theme.violet} text="+ Add feedback" />
        </StyledFeedbackWrapper>
  );
};

export default Feedback;
