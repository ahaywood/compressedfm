import styled from "styled-components";
import { MoreLink } from "modules/shared/components/MoreLink";

const EpisodeSummary = ({ briefDescription, title, episodeNumber, publishedAt }) => {
  return (
    <StyledEpisodeSummary>
      <div className="episode-meta">
        <div className="title">
          <h3>{publishedAt}</h3>
          <h1>{title}</h1>
        </div>
        <div className="description">
          <div className="episode-number">
            <span className="zeros">0</span>
            <span className="number">41</span>
          </div>
          <p className="large-body-copy">
            {briefDescription}
          </p>
        </div>
      </div>

      {/* embed from Transistor */}
      <div className="audio-player">

      </div>
    </StyledEpisodeSummary>
  )
}

const StyledEpisodeSummary = styled.section`

`;

export { EpisodeSummary }
