// split out seconds into hours, minutes, and seconds
const getHoursMinutesSeconds = (seconds) => {
  // determine how many minutes
  let hours = 0;
  let remainingMinutes = 0;
  const minutes = Math.floor(Number(seconds) / 60);
  const remainingSeconds = Math.floor(Number(seconds) % 60);

  // are there hours?
  if (minutes > 59) {
    hours = minutes / 60;
    remainingMinutes = Math.floor(minutes % 60);
  }

  return {
    hours: leadingZeros(hours),
    minutes: leadingZeros(remainingMinutes ? remainingMinutes : minutes),
    seconds: leadingZeros(remainingSeconds)
  }
}

const leadingZeros = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else if (number < 1) {
    return "00";
  }
  return number;
}

// convert time to seconds
const convertToSeconds = (hours, minutes, seconds) => {
  const hoursInSeconds = Number(hours) * 60 * 60;
  const minutesInSeconds = Number(minutes) * 60;
  const convertedTime = hoursInSeconds + minutesInSeconds + Number(seconds);
  return convertedTime;
}

const convertTimeString = (timeString) => {
  const time = timeString.split(':');

  let newVal;

  // hh:mm:ss
  if (time.length > 1) {
    newVal = convertToSeconds(time[0], time[1], time[2]);
  } // mm:ss
  else if (time.length > 0) {
    newVal = convertToSeconds(0, time[0], time[1]);
  } // ss
  else {
    newVal = time[0]
  }

  return String(newVal);
}

export { convertTimeString, convertToSeconds, leadingZeros, getHoursMinutesSeconds };