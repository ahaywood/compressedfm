import Image from 'next/image';
import styled from 'styled-components';
import { MoreLink } from 'modules/shared/components/MoreLink';
import { MixinBodyCopy, MixinHeading } from 'styles/Typography';

const Sponsors = ({ className, sponsor }) => (
  <StyledSponsors className={className}>
    <h4>Sponsors</h4>
    <ul>
      {sponsor.map((item) => (
        <li key={item._id}>
          <img src={item.logo} alt={item.title} className="logo" />
          {sponsor.title}
          {item.offerLink && item.offer && <MoreLink href={item.offerLink} label={item.offer} className="promo-link" />}
          <p>{item.about}</p>
        </li>
      ))}
    </ul>
  </StyledSponsors>
);

const StyledSponsors = styled.div`
  .logo {
    margin: auto auto 0 0;
    max-width: 150px;
  }

  h4 {
    ${MixinHeading}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 60px;
  }

  .promo-link {
    margin-bottom: 7px;
  }

  p {
    ${MixinBodyCopy}
  }
`;

export { Sponsors };
