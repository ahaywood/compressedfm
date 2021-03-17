import styled from "styled-components";
import Image from "next/image";

// components
import { Podcatchers } from "../shared/components/Podcatchers";
import { VerticalDivider } from "../shared/components/VerticalDivider";
import { FeaturedEpisode } from "./components/FeaturedEpisode";
import { TheHosts } from "./components/TheHosts";
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";

const HomePage = () => {
  return (
    <StyledHomePage>
      <header>
        <div>
          <h1>
            <Image src="/images/logo.svg" width={850} height={272} layout="intrinsic" />
          </h1>
          <h2>
            A weekly podcast about web design and development from{" "}
            <a href="http://jamesqquick.com" target="_blank">James Q Quick</a>{" "}
            and <a href="http://selfteach.me" target="_blank">Amy Dutton</a>.
          </h2>
        </div>
      </header>
      <Podcatchers className="podcatchers" />
      <VerticalDivider />
      <FeaturedEpisode
        episodeNumber="1"
      />
      <VerticalDivider />
      <TheHosts />
      <VerticalDivider />
      <EpisodeGrid />
      <Newsletter />
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  background: url('/images/bg.png') center -25px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;

  .hamburger {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  header {
    text-align: center;
    padding-top: 110px;
    width: 100%;

    /* wraps logo */
    h1 {
      margin: 0 auto 20px;
      padding: 0 0 0 140px;
      position: relative;
      max-width: 850px;
    }

    /* A weekly podcast about... */
    h2 {
      font-family: ${props => props.theme.sansSerif};
      font-size: 3.6rem;
      font-weight: ${props => props.theme.fontBlack};
      text-align: left;
      margin: 0 auto;
      padding: 0 0 120px 0;
      position: relative;
      width: 710px;

      a {
        color: #AAA;
        text-decoration: none;
        white-space: nowrap;

        &:hover {
          color: ${props => props.theme.yellow};
        }
      }
    }
  }

  .podcatchers {
    padding-bottom: 50px;
  }

`;

export { HomePage }
