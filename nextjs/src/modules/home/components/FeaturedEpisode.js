import styled from "styled-components";

const FeaturedEpisode = ({ audioUrl, date, episodeNumber, hostAvatars, moreLink, title, summary }) => {

  const episodeNumberWithZeros = () => {
    if (episodeNumber < 10) {
      return `00${episodeNumber}`
    }
    else if (episodeNumber < 100) {
      return `0${episodeNumber}`;
    }
    return episodeNumber;
  }

  return (
    <StyledFeaturedEpisode>
      <div>
        Episode
        {episodeNumberWithZeros}
        02.13.21
      </div>

    </StyledFeaturedEpisode>
  )
}

const StyledFeaturedEpisode = styled.section`

`;

export { FeaturedEpisode }
