import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TopNav = () => {
  const router = useRouter();

  // strip the slash out of the pathname so that I can use it as a className
  const currentPage = router.asPath.replace('/', '');

  return (
    <StyledTopNav>
      <ul className={currentPage || 'home'}>
        <li className="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {/* <li className="about">
          <Link href="/about"><a>About</a></Link>
        </li> */}
        <li className="episodes">
          <Link href="/episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li className="sponsors">
          <Link href="/sponsors">
            <a>Sponsors</a>
          </Link>
        </li>
        <li className="newsletter">
          <Link href="/newsletter">
            <a>Newsletter</a>
          </Link>
        </li>
        <li className="contact">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </StyledTopNav>
  );
};

export { TopNav };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTopNav = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 4.8rem;
      font-weight: ${(props) => props.theme.fontBlack};
      line-height: 8.2rem;
    }

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.lavenderIndigo};
      }
    }

    /* set styles for the current page */
    &.home li.home a,
    &.about li.about a,
    &.episodes li.episodes a,
    &.sponsors li.sponsors a,
    &.newsletter li.newsletter a,
    &.contact li.contact a {
      color: ${(props) => props.theme.yellow};
    }
  }
`;
