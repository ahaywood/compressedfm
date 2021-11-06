import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { Newsletter } from 'modules/shared/components/Newsletter';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';

// styles
import { MixinSectionHeading, MixinPageTitle } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TagPage = ({ content }) => {
  const { title, episodes } = content;
  return (
    <StyledTagPage>
      <h3>Tagged</h3>
      {title && <h1>{title}</h1>}
      {episodes ? (
        <EpisodeGrid episodes={episodes} />
      ) : (
        <p>
          <em>No Episodes Found</em>
        </p>
      )}
      <VerticalDivider />
      <Newsletter />
    </StyledTagPage>
  );
};

TagPage.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape({
      title: PropTypes.string,
      episodes: PropTypes.array,
    }),
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTagPage = styled.section`
  h3 {
    ${MixinSectionHeading};
    border: none;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  h1 {
    ${MixinPageTitle};
  }
`;

export { TagPage };
