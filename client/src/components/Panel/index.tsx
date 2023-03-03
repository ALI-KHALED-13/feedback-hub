import { useTheme } from "styled-components";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { Heading3 } from "../Typo";
import { StyledPanel, StyledPanelWrapper } from "./styled";

const options = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

const Panel = () => {
  
  const suggestionsNumber = 6; // hardcoded

  const theme = useTheme();

  return (
    <StyledPanel>
      <StyledPanelWrapper>
        <Heading3 style={{color: 'white'}}>{suggestionsNumber} Suggestions</Heading3>
        <Dropdown label="Sort by:" options={options} />
      </StyledPanelWrapper>
      <Button color={theme.violet} text="+ Add feedback" />
    </StyledPanel>
  );
};

export default Panel;
