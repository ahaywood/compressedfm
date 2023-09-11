const EpisodeZeros = (number: string): JSX.Element => {
  let zeros = "";

  const myNumber = parseInt(number);

  if (myNumber < 10) zeros = "00";
  else if (myNumber < 100) zeros = "0";

  return <div className="text-transparent zeros"> {zeros} </div>;
};

export { EpisodeZeros };
