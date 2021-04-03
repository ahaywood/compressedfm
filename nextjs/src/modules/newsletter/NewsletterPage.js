import styled from "styled-components";
import { Newsletter } from "modules/shared/components/Newsletter";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { NewsletterListItem } from "./components/NewsletterListItem";


const NewsletterPage = (props) => {
  const { newsletters } = props;
  return (
    <div>
      <Newsletter />

      <VerticalDivider />

      {/* list of previous newsletters */}
      <StyledNewsletterList>
        {newsletters && newsletters.map(item => {
          return (
            <NewsletterListItem
              dateSent={item.dateSent}
              key={item._id}
              slug={item.slug}
              subject={item.subject}
            />
          )
        })}
      </StyledNewsletterList>

    </div>
  )
}

export { NewsletterPage }

const StyledNewsletterList = styled.section`
  background: url('/images/horizontal-divider.svg') center bottom repeat-x;
  margin: 50px auto;
  max-width: ${props => props.theme.pageWidth};
`;