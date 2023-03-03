import styled from "styled-components";

export const StyledPanel = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 7.2rem;
  padding: 1.4rem 1.6rem 1.4rem 6.3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.spaceNavy};

  &::before {
    position: absolute;
    top: 2.4rem;
    left: 2.4rem;
    display: block;
    content: '';
    width: 2.5rem;
    height: 2.5rem;
    background: url('/lightbulb.svg') no-repeat center;
  }
`;

export const StyledPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.8rem;
`;
