import styled from 'styled-components';

const Checkbox = () => (
  <StyledCheckbox>
    <input type="checkbox" />
  </StyledCheckbox>
);

const StyledCheckbox = styled.section`
  display: relative;
`;

export { Checkbox };
