import Button from '../Button';
import {
  StyledNoFeedback,
  StyledNoFeedbackHeading,
  StyledNoFeedbackParagraph,
} from './styled';
import { useTheme } from 'styled-components';
import spy from '../../images/spy.svg';

interface NoFeedbackProps {
  text: string;
}

const NoFeedback = ({text}: NoFeedbackProps) => {
  const theme = useTheme();

  return (
    <StyledNoFeedback>
      <img style={{marginBottom: '4.8rem'}} alt="spy" src={spy} width="130px" />
      <StyledNoFeedbackHeading>There is no feedback yet.</StyledNoFeedbackHeading>
      <StyledNoFeedbackParagraph>{text}</StyledNoFeedbackParagraph>
      <Button color={theme.violet} hoverColor={theme.lightViolet} text="+ Add feedback" />
    </StyledNoFeedback>
  );
};

export default NoFeedback;
