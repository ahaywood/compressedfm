import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'modules/shared/components/Icon';
import { Breakpoints } from 'styles/Breakpoints';
import { formatLongDate } from 'utils/dateHelpers';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const NewsletterPagination = ({ pagination }) => {
  const { previous, next } = pagination;
  return (
    <StyledNewsletterPagination>
      <div className="pagination">
        <div className="next">
          {/* NEXT */}
          {next && next?.published && (
            <Link href={`/newsletter/${next.slug.current}`}>
              <a>
                <div className="arrow">
                  <Icon name="arrow" className="left-arrow" />
                  Next
                </div>
                <div className="date">{formatLongDate(next.dateSent)}</div>
                <div className="subject">{next.subject}</div>
              </a>
            </Link>
          )}
        </div>
        {/* PREVIOUS */}
        <div className="previous">
          {previous && previous?.published && (
            <Link href={`/newsletter/${previous.slug.current}`}>
              <a>
                <div className="arrow">
                  Previous
                  <Icon name="arrow" />
                </div>
                <div className="date">{formatLongDate(previous.dateSent)}</div>
                <div className="subject">{previous.subject}</div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </StyledNewsletterPagination>
  );
};

NewsletterPagination.propTypes = {
  pagination: PropTypes.any.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNewsletterPagination = styled.section`
  .pagination {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'next previous';
    max-width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;

    a {
      text-decoration: none;
    }

    .arrow {
      color: ${(props) => props.theme.yellow};
      font-family: ${(props) => props.theme.mono};
      font-size: 1.8rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      letter-spacing: 0.25rem;
      margin-bottom: 10px;
    }

    .date {
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    .subject {
      font-family: ${(props) => props.theme.sansSerif};
      font-weight: ${(props) => props.theme.fontBlack};
      color: ${(props) => props.theme.white};
      font-size: 3.2rem;
      line-height: 1.2;
    }

    a:hover .date,
    a:hover .subject {
      color: ${(props) => props.theme.yellow};
    }

    .next,
    .previous {
      padding: 40px;
    }

    .next {
      grid-area: next;

      @media (${Breakpoints.large}) {
        padding-left: 0;
      }

      .arrow {
        position: relative;
        left: -30px;
      }

      .left-arrow {
        transform: rotate(180deg);
      }

      svg {
        left: 0;
        position: relative;
        transition: left 0.25s ease-in-out;
      }

      a:hover svg {
        left: -10px;
      }
    }

    .previous {
      grid-area: previous;
      text-align: right;

      @media (${Breakpoints.large}) {
        padding-right: 0;
      }

      .arrow {
        position: relative;
        right: -30px;
        margin-left: auto;
        justify-content: flex-end;
      }

      svg {
        right: 0;
        position: relative;
        transition: right 0.25s ease-in-out;
      }

      a:hover svg {
        right: -10px;
      }
    }
  }
`;

export { NewsletterPagination };
