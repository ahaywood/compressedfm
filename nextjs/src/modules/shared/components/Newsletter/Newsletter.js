import styled from "styled-components";

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <h2>Sign up for the newsletter</h2>
      <p>
        Want to stay up to date on our podcast? Get a behind-the-scenes look{" "}
        and know when new episodes drop.
      </p>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  h2 {
    font-family: ${props => props.theme.sansSerif};
    font-weight: 4.8rem;
  }

  p {

  }
`;

export { Newsletter }
