import Button from '../Button';
import Dropdown from '../Dropdown';
import { StyledPanel, StyledPanelWrapper, StyledPanelHeading } from './styled';
import { useTheme } from 'styled-components';
import { sortingOptions as options} from '../../data';

interface PanelProps {
  feedbackNumber: number;
}

const Panel = ({feedbackNumber}: PanelProps) => {

  const theme = useTheme();

  return (
    <StyledPanel>
      <StyledPanelWrapper>
        <StyledPanelHeading>{feedbackNumber} Suggestions</StyledPanelHeading>
        <Dropdown label="Sort by: " options={options} />
      </StyledPanelWrapper>
      <Button color={theme.violet} hoverColor={theme.lightViolet} text="+ Add feedback" />
    </StyledPanel>
  );
};

export default Panel;
