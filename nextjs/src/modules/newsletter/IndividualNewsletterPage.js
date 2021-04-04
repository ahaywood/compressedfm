import Link from 'next/link';
import Head from 'next/head';
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from "modules/shared/blockContent/Serializers";
import { Newsletter } from "modules/shared/components/Newsletter";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { MixinBodyCopy, MixinPageTitle } from "styles/Typography";
import { Meta } from 'modules/shared/components/Meta';

const IndividualNewsletterPage = (props) => {
  const { dateSent, subject, content, meta } = props;
  return (
    <StyledIndividualNewsletterPage>
      <Head>
        <title>{subject} || Compressed.fm</title>
        <Meta meta={meta} />
      </Head>

      <h1 className="page-title">{subject}</h1>
      <main>
        <BlockContent blocks={content} serializers={serializers} />
      </main>

      {/* pagination */}
      <div className="pagination">
        <div className="previous">

        </div>

        <div className="next">

        </div>
      </div>

      <VerticalDivider />

      <Newsletter />

    </StyledIndividualNewsletterPage>
  )
}

const StyledIndividualNewsletterPage = styled.div`

  h1.page-title {
    ${MixinPageTitle}
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
