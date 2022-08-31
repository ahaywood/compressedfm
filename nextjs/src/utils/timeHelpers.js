function calculateTime(secs) {
  console.log('🚀 ~ file: timeHelpers.js ~ line 2 ~ calculateTime ~ secs', secs);

  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  console.log('🚀 ~ file: timeHelpers.js ~ line 6 ~ calculateTime ~ seconds', returnedSeconds);
  console.log('🚀 ~ file: timeHelpers.js ~ line 6 ~ calculateTime ~ minutes', returnedMinutes);
  return `${returnedMinutes}:${returnedSeconds}`;
}

export { calculateTime };
