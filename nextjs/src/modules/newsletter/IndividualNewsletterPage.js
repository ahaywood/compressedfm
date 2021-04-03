import styled from "styled-components";
const BlockContent = require('@sanity/block-content-to-react')
import { serializers } from "modules/shared/blockContent/Serializers";
import { Newsletter } from "modules/shared/components/Newsletter";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { MixinBodyCopy } from "styles/Typography";

const IndividualNewsletterPage = (props) => {
  const { dateSent, subject, content } = props;
  return (
    <StyledIndividualNewsletterPage>
      <h1 className="page-title">{subject}</h1>
      <main>
        <BlockContent blocks={content} serializers={serializers} />
      </main>

      <VerticalDivider />

      <Newsletter />

    </StyledIndividualNewsletterPage>
  )
}

const StyledIndividualNewsletterPage = styled.div`

  h1.page-title {
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.fontBlack};
    font-size: 8.5rem;
    line-height: 1;
    max-width: 80%;
    margin: 0 auto 70px;
    text-align: center;
  }

  main {
    margin: 0 auto;
    max-width: 600px;

    p {
      ${MixinBodyCopy}
      margin-bottom: ${props => props.theme.betweenTextBlocks};
    }
  }
`;

export { IndividualNewsletterPage }
