import styled from "styled-components";

const Checkbox = () => {
  return (
    <StyledCheckbox>
      <input type="checkbox" />
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled.section`
  display: relative;
`;

export { Checkbox }
