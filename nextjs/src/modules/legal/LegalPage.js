import Head from 'next/head';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

// components
import { serializers } from 'modules/shared/blockContent/Serializers';
import { Meta } from 'modules/shared/components/Meta';

// styles
import { MixinBodyCopy, MixinHeadingWithHorizontalLines } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const LegalPage = ({ content }) => {
  const { meta, title } = content;
  return (
    <StyledLegalPage>
      <Head>
        <title>{title} || Compressed.fm</title>
        {meta && <Meta meta={meta} />}
      </Head>

      <div className="page-title__wrapper">
        <h1>{title}</h1>
      </div>

      <main>
        <BlockContent blocks={content.content} serializers={serializers} />
      </main>
    </StyledLegalPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledLegalPage = styled.section`
  ${MixinHeadingWithHorizontalLines}

  .page-title__wrapper {
    margin-bottom: 40px;
  }

  h4 {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.6rem;
    padding-top: 30px;
  }

  main {
    margin: 0 auto;
    max-width: 600px;

    p {
      ${MixinBodyCopy}
      margin-bottom: ${(props) => props.theme.betweenTextBlocks};
    }
  }
`;

export { LegalPage };
