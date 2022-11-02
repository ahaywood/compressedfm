import styled from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';

const ColophonColor = ({ border, color }) => (
  <StyledColophonColor>
    <StyledCircleExtended color={color} border={border} />
    <StyledColorHex>{color}</StyledColorHex>
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
}));

const StyledCircleExtended = styled(StyledCircle)`
  height: 50px;
  width: 50px;

  @media (${Breakpoints.small}) {
    height: 100px;
    width: 100px;
  }
`;

const StyledColorHex = styled.div`
  display: none;

  @media (${Breakpoints.small}) {
    display: block;
  }
`;

export { ColophonColor };
