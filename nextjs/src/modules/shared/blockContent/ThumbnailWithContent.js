import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

// components
import { serializers } from 'modules/shared/blockContent/Serializers';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ThumbnailWithContent = ({ node }) => {
  const { thumbUrl, alt, content } = node;
  return (
    <StyledThumbnailWithContent>
      <div>
        <img src={thumbUrl.url} alt={alt} width="160" />
      </div>
      <div>
        <BlockContent blocks={content} serializers={serializers} />
      </div>
    </StyledThumbnailWithContent>
  );
};

ThumbnailWithContent.propTypes = {
  node: PropTypes.shape({
    thumbUrl: PropTypes.object,
    alt: PropTypes.string,
    content: PropTypes.array,
  }),
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledThumbnailWithContent = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 50px;

  img {
    border: 1px solid ${(props) => props.theme.bastille};
  }

  /* episode heading */
  h4 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.doveGray};
    letter-spacing: 1px;
    margin: 0 0 10px 0;
    padding: 0;
  }

  /* episode title */
  h3 {
    margin: 0;
    padding: 0;

    a {
      color: ${(props) => props.theme.yellow};
      text-decoration: none;
    }
  }
`;

export { ThumbnailWithContent };
