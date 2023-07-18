import PropTypes from 'prop-types';
import { MoreLink } from 'modules/shared/components/MoreLink';
import Link from 'next/link';
import styled from 'styled-components';
import { formatLongDate } from 'utils/dateHelpers';
import { Breakpoints } from 'styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const NewsletterListItem = ({ dateSent, slug, subject }) => (
  <StyledNewsletterListItem>
    <div className="date-sent">{formatLongDate(dateSent)}</div>
    <div className="subject">
      <Link href={`/newsletter/${slug.current}`}>{subject}</Link>
    </div>
    <MoreLink className="more" href={`/newsletter/${slug.current}`} />
  </StyledNewsletterListItem>
);

NewsletterListItem.propTypes = {
  dateSent: PropTypes.string,
  slug: PropTypes.object,
  subject: PropTypes.string,
};

NewsletterListItem.defaultProps = {
  dateSent: '',
  slug: {},
  subject: '',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNewsletterListItem = styled.section`
  align-items: flex-start;
  background: url('/images/horizontal-divider.svg') center top repeat-x;
  display: flex;
  margin: 0 auto;
  max-width: ${(props) => props.theme.pageWidth};
  padding: 40px ${(props) => props.theme.mobilePadding};
  flex-direction: column;

  @media (${Breakpoints.portrait}) {
    flex-direction: row;
  }

  @media (${Breakpoints.regular}) {
    padding: 40px 0;
  }

  .date-sent {
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    font-style: italic;
    padding-top: 25px;

    @media (${Breakpoints.portrait}) {
      flex-basis: 200px;
    }
  }

  .subject {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 4.8rem;
    font-weight: ${(props) => props.theme.fontBlack};

    @media (${Breakpoints.portrait}) {
      flex: 1;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};

      &:hover {
        color: ${(props) => props.theme.yellow};
      }
    }
  }

  .more {
    @media (${Breakpoints.regular}) {
      padding-top: 15px;
    }
  }
`;

export { NewsletterListItem };
