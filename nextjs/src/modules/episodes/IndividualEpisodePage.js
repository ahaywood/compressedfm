import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { EpisodeSummary } from "./components/EpisodeSummary"
import { FullTranscript } from "./components/FullTranscript"
import { Guest } from "./components/Guest"
import { JumpLinks } from "./components/JumpLinks"
import { Links } from "./components/Links"
import { Sponsors } from "./components/Sponsors"
import { Podcatchers } from "modules/shared/components/Podcatchers";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";
import { WaveformPlayer } from "modules/shared/components/AudioPlayer/WaveformPlayer";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualEpisodePage = ({ episode: {
  audioPath,
  briefDescription,
  categories,
  episodeCover,
  episodeNumber,
  episodeTranscript,
  guest,
  listLink,
  publishedAt,
  sponsor,
  timeJump,
  title,
  relatedEpisodes
} }) => {

  /**
   * Jump to a specific time on the Waveform Player
   * @param {number} time in seconds
   */
  const jumpToTimeStamp = (time) => {
    alert(`clicked on a time stamp ${time}`);
  }

  return (
    <StyledIndividualEpisodePage>
      <EpisodeSummary
        className="episode-summary"
        title={title}
        briefDescription={briefDescription}
        episodeNumber={episodeNumber}
        publishedAt={publishedAt}
      />
      <div className="audio-player">
        <WaveformPlayer />
      </div>
      <VerticalDivider />

      <div className="content">
        <main>
          {/* GUEST */}
          {(guest && guest.length > 0) && <Guest guest={guest} className="guests" />}

          <div className="time-links">
            {/* TIME JUMP LINKS */}
            <JumpLinks timeJump={timeJump} className="time" />

            {/* SHOW LINKS */}
            <Links listLink={listLink} className="links" />
          </div>

          {/* TRANSCRIPT */}
          <FullTranscript className="transcript" handleClick={jumpToTimeStamp} transcript={episodeTranscript.transcript} />
        </main>

        {/* SPONSORS */}
        <aside className="sponsor-list">
          {sponsor && (
            <Sponsors className="sponsors" sponsor={sponsor} />
          )}
        </aside>

      </div>
      <VerticalDivider />

      {/* PODCATCHERS */}
      <Podcatchers className="podcatchers" />
      <VerticalDivider />

      {/* EPISODE GRID */}
      {relatedEpisodes && (
        <>
          <EpisodeGrid header="Related Episodes" episodes={relatedEpisodes} />
          <VerticalDivider />
        </>
      )}

      {/* NEWSLETTER */}
      <Newsletter />

    </StyledIndividualEpisodePage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
IndividualEpisodePage.propTypes = {
  episode: PropTypes.shape({
    audioPath: PropTypes.string,
    briefDescription: PropTypes.string,
    categories: PropTypes.string,
    episodeCover: PropTypes.string,
    episodeNumber: PropTypes.string,
    guest: PropTypes.array,
    listLink: PropTypes.array,
    publishedAt: PropTypes.string,
    sponsor: PropTypes.array,
    timeJump: PropTypes.array,
    title: PropTypes.string,
    // transcript: PropTypes.string,
    relatedEpisodes: PropTypes.array
  })
};

IndividualEpisodePage.defaultProps = {
  episode: {
    audioPath: '',
    briefDescription: '',
    categories: '',
    episodeCover: '',
    episodeNumber: '',
    guest: [],
    listLink: [],
    publishedAt: '',
    sponsor: [],
    timeJump: [],
    title: '',
    // transcript: '',
    relatedEpisodes: []
  }
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledIndividualEpisodePage = styled.section`
  .episode-summary {
    margin: 0 auto;
    max-width: ${props => props.theme.pageWidth};
    position: relative;
  }

  .audio-player {
    margin: 60px 0;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    margin: 0 auto;
    max-width: ${props => props.theme.pageWidth};
    position: relative;
  }

  .guests {
    margin-bottom: 200px;
  }

  .time-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-bottom: 200px;
  }

  .sponsors {
    position: sticky;
    top: 10px;
    padding-bottom: 60px;
  }

  .transcript {
    margin-bottom: 200px;
  }

  .podcatchers {
    padding: 65px 0;
  }

`;

export { IndividualEpisodePage }
