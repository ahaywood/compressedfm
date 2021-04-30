import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

// components
import { serializers } from 'modules/shared/blockContent/Serializers';
import { Newsletter } from 'modules/shared/components/Newsletter';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { Meta } from 'modules/shared/components/Meta';
import { Icon } from 'modules/shared/components/icon';

// styles
import { Breakpoints } from 'styles/Breakpoints';
import { MixinBodyCopy, MixinPageTitle } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualNewsletterPage = (props) => {
  const { dateSent, subject, content, meta, pagination } = props;
  return (
    <StyledIndividualNewsletterPage>
      <Head>
        <title>{subject} || Compressed.fm</title>
        {meta && <Meta meta={meta} />}
      </Head>

      <h1 className="page-title">{subject}</h1>
      <main>
        <BlockContent blocks={content} serializers={serializers} />
      </main>

      {/* pagination */}
      <div className="pagination">
        {pagination.previous && (
          <div className="previous">
            <Icon name="arrow" />
            Previous
          </div>
        )}

        {pagination.next && <div className="next">Next</div>}
      </div>

      <VerticalDivider />

      <Newsletter />
    </StyledIndividualNewsletterPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledIndividualNewsletterPage = styled.div`
  h1.page-title {
    ${MixinPageTitle}
  }

  main {
    padding: 0 ${(props) => props.theme.mobilePadding};
    margin: 0 auto;
    max-width: 600px;

    @media (${Breakpoints.regular}) {
      padding: 0;
    }

    h2 {
      font-size: 2rem;

      @media (${Breakpoints.portrait}) {
        color: ${(props) => props.theme.yellow};
        font-size: 2.4rem;
      }
    }

    img {
      max-width: 100%;
    }

    p {
      ${MixinBodyCopy}
      margin-bottom: ${(props) => props.theme.betweenTextBlocks};
    }
  }
`;

export { IndividualNewsletterPage };
