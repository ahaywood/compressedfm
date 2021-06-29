import styled from 'styled-components';

const ColophonColor = ({ border, color }) => (
  <StyledColophonColor>
    <StyledCircle color={color} border={border} />
    {color}
  </StyledColophonColor>
);

const StyledColophonColor = styled.div`
  font-family: ${(props) => props.theme.mono};
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
`;

const StyledCircle = styled.div((props) => ({
  backgroundColor: props.color,
  border: '1px solid transparent',
  borderColor: props.border ? props.border : 'transparent',
  borderRadius: '50%',
  margin: '0 auto 16px auto',
  height: '100px',
  width: '100px',
}));

export { ColophonColor };
