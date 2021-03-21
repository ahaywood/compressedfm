import styled from "styled-components";

const Dropdown = () => {
  return (
    <StyledDropdown>
      <select>
        <option value=""></option>
      </select>
    </StyledDropdown>
  )
}

const StyledDropdown = styled.section`
  position: relative;
`;

export { Dropdown }
