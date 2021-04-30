import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'modules/shared/components/Icon';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const NewsletterPagination = ({ pagination }) => (
  <StyledNewsletterPagination>
    <div className="pagination">
      <div className="Next">
        {pagination.next && (
          <Link href={`/newsletter/${pagination.next.slug}`}>
            <a>
              <Icon name="arrow" />
              {pagination.next.subject}
            </a>
          </Link>
        )}
      </div>
      <div className="previous">
        {pagination.previous && (
          <Link href={`/newsletter/${pagination.previous.slug}`}>
            <a>
              <Icon name="arrow" />
              {pagination.previous.subject}
            </a>
          </Link>
        )}
      </div>
    </div>
  </StyledNewsletterPagination>
);

NewsletterPagination.propTypes = {
  pagination: PropTypes.any.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNewsletterPagination = styled.section``;

export { NewsletterPagination };
