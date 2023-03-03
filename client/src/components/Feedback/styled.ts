import styled from "styled-components";

export const StyledFeedback = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledFeedbackWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.white};
`;
