import { useState } from "react";
import styled from "styled-components";
import { SponsorAudioPlayer } from "modules/shared/components/AudioPlayer/SponsorAudioPlayer";

const SponsorDashboardPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(1);

  const handleMultipleAudioPlayers = (id) => {
    setCurrentlyPlaying(id);
  }

  return (
    <StyledSponsorDashboardPage>
      <SponsorAudioPlayer id="1" currentlyPlaying handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
      <SponsorAudioPlayer id="2" currentlyPlaying handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
      <SponsorAudioPlayer id="3" currentlyPlaying handleMultipleAudioPlayers={handleMultipleAudioPlayers} />
    </StyledSponsorDashboardPage>
  )
}

const StyledSponsorDashboardPage = styled.section`

`;

export { SponsorDashboardPage }
