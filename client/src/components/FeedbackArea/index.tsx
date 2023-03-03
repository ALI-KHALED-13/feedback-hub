import Panel from "../Panel";
import Feedback from "../Feedback";
import { StyledFeedbackArea } from "./styled";
import { IFeedback } from "types";

const feedbacks: IFeedback[] = [

];

const FeedbackArea = () => {
  return <StyledFeedbackArea>
    <Panel />
    <Feedback feedbacks={feedbacks} />
  </StyledFeedbackArea>
};

export default FeedbackArea;
