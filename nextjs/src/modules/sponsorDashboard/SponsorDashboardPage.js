import { useState } from "react";
import styled from "styled-components";
import { SponsorAudioPlayer } from "modules/shared/components/AudioPlayer/SponsorAudioPlayer";
import { FeaturedAudioPlayer } from "modules/shared/components/AudioPlayer/FeaturedAudioPlayer";

const SponsorDashboardPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState();

  const handleMultipleAudioPlayers = (id) => {
    setCurrentlyPlaying(id);
  }

  return (
    <StyledSponsorDashboardPage>
      <SponsorAudioPlayer id="1" currentlyPlaying={currentlyPlaying} handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
      <SponsorAudioPlayer id="2" currentlyPlaying={currentlyPlaying} handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
      <SponsorAudioPlayer id="3" currentlyPlaying={currentlyPlaying} handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
    </StyledSponsorDashboardPage>
  )
}

const StyledSponsorDashboardPage = styled.section`

`;

export { SponsorDashboardPage }
