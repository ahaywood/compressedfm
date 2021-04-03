import { MoreLink } from "modules/shared/components/MoreLink";
import Link from "next/link"
import styled from "styled-components";
import { formatLongDate } from "utils/dateHelpers";

const NewsletterListItem = ({ dateSent, slug, subject }) => {
  return (
    <StyledNewsletterListItem>
      <div className="date-sent">{formatLongDate(dateSent)}</div>
      <div className="subject">
        <Link href={`/newsletter/${slug.current}`}>
          <a>{subject}</a>
        </Link>
      </div>
      <MoreLink className="more" href={`/newsletter/${slug.current}`} />
    </StyledNewsletterListItem>
  )
}

const StyledNewsletterListItem = styled.section`
  align-items: flex-start;
  background: url('/images/horizontal-divider.svg') center top repeat-x;
  display: flex;
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth};
  padding: 40px 0;

  .date-sent {
    font-family: ${props => props.theme.mono};
    font-size: 1.8rem;
    font-style: italic;
    flex-basis: 200px;
    padding-top: 25px;
  }

  .subject {
    font-family: ${props => props.theme.sansSerif};
    font-size: 4.8rem;
    font-weight: ${props => props.theme.fontBlack};
    flex: 1;

    a {
      text-decoration: none;
      color: ${props => props.theme.white};

      &:hover {
        color: ${props => props.theme.yellow};
      }
    }
  }

  .more {
    padding-top: 15px;
  }
`;

export { NewsletterListItem }
