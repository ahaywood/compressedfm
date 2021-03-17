const EpisodeZeros = (number) => {
  let zeros = '';

  if (number < 10)
    zeros = "00";
  else if (number < 100)
    zeros = "0";

  return <span className="zeros">{zeros}</span>
}

export { EpisodeZeros }