import styled from 'styled-components';
import { Podcatchers as StandardPodcatchers } from 'modules/shared/components/Podcatchers';

const Podcatchers = ({ node }) => {
  const { heading } = node;
  return (
    <StyledPodcatchers>
      <h2>{heading}</h2>
      <div className="podcatchers">
        <StandardPodcatchers showHeading={false} className="newsletter-podcatchers" />
      </div>
    </StyledPodcatchers>
  );
};

const StyledPodcatchers = styled.section`
  .newsletter-podcatchers {
    ul {
      flex-wrap: wrap;
    }
  }
`;

export { Podcatchers };
