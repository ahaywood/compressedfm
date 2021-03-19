import styled from "styled-components";

const EpisodeZeros = (number) => {
  let zeros = '';

  if (number < 10)
    zeros = "00";
  else if (number < 100)
    zeros = "0";

  return <StyledZeros className="zeros">{zeros}</StyledZeros>
}

const StyledZeros = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px ${props => props.theme.yellow};
`;

export { EpisodeZeros }