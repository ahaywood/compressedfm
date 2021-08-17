import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';

import { Podcatchers } from 'modules/shared/components/Podcatchers';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { Newsletter } from 'modules/shared/components/Newsletter';
import { WaveformPlayer } from 'modules/shared/components/AudioPlayer/WaveformPlayer';
import { EpisodeSummary } from './components/EpisodeSummary';
import { FullTranscript } from './components/FullTranscript';
import { Guest } from './components/Guest';
import { JumpLinks } from './components/JumpLinks';
import { Links } from './components/Links';
import { Sponsors } from './components/Sponsors';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualEpisodePage = ({
  episode: {
    audioPath,
    briefDescription,
    episodeNumber,
    episodeTranscript,
    guest,
    listLink,
    publishedAt,
    sponsor,
    timeJump,
    title,
    relatedEpisodes,
  },
}) => {
  // state
  const [skipTo, setSkipTo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const UrlParams = router.query;
    skipToTimestamp(UrlParams.time);
  }, [router]);

  // jump to a specific time on the waveform player
  const skipToTimestamp = (time) => {
    setSkipTo(time);
  };

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
        <WaveformPlayer episodeTitle={title} audioPath={audioPath} episodeNumber={episodeNumber} skipTo={skipTo} />
      </div>
      <VerticalDivider />

      <div className="content">
        <main>
          {/* GUEST */}
          {guest && guest.length > 0 && <Guest guest={guest} className="guests" />}

          <div className="time-links">
            {/* TIME JUMP LINKS */}
            {timeJump && <JumpLinks className="jump-links time" timeJump={timeJump} handleClick={skipToTimestamp} />}

            {/* SHOW LINKS */}
            {listLink && <Links listLink={listLink} className="links" />}
          </div>

          {/* TRANSCRIPT */}
          {/* {episodeTranscript?.transcript && (
            <FullTranscript
              className="transcript"
              handleClick={skipToTimestamp}
              transcript={episodeTranscript.transcript}
            />
          )} */}
        </main>

        {/* SPONSORS */}
        <aside className="sponsor-list">{sponsor && <Sponsors className="sponsors" sponsor={sponsor} />}</aside>
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
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
IndividualEpisodePage.propTypes = {
  episode: PropTypes.shape({
    audioPath: PropTypes.string,
    briefDescription: PropTypes.string,
    categories: PropTypes.array,
    episodeCover: PropTypes.object,
    episodeNumber: PropTypes.number,
    guest: PropTypes.array,
    listLink: PropTypes.array,
    publishedAt: PropTypes.string,
    sponsor: PropTypes.array,
    timeJump: PropTypes.array,
    title: PropTypes.string,
    episodeTranscript: PropTypes.object,
    relatedEpisodes: PropTypes.array,
  }),
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
    relatedEpisodes: [],
  },
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledIndividualEpisodePage = styled.section`
  .episode-summary {
    margin: 0 auto;
    max-width: ${(props) => props.theme.pageWidth};
    position: relative;
  }

  .audio-player {
    margin: 60px 0;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    margin: 0 auto;
    max-width: ${(props) => props.theme.pageWidth};
    padding: 0 ${(props) => props.theme.mobilePadding};
    position: relative;

    @media (${Breakpoints.medium}) {
      grid-template-columns: 2fr 1fr;
    }

    @media (${Breakpoints.regular}) {
      padding: 0;
    }
  }

  .guests {
    margin-bottom: 200px;
  }

  .time-links {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    margin-bottom: 75px;

    @media (${Breakpoints.medium}) {
      margin-bottom: 200px;
      grid-template-columns: 1fr 1fr;
    }
  }

  .jump-links {
    margin-bottom: 75px;

    @media (${Breakpoints.medium}) {
      margin-bottom: 0;
    }
  }

  .sponsors {
    padding-bottom: 60px;
  }

  .transcript {
    margin-bottom: 200px;
  }

  .podcatchers {
    padding: 65px 0;
  }
`;

export { IndividualEpisodePage };
