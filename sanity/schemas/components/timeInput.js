import React, { useState, useEffect, useRef } from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import { Box, TextInput, Flex, Label } from '@sanity/ui'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

// sanity's patch event
const createPatchFrom = (value) => {
  return PatchEvent.from(value === '' ? unset() : set(value));
}

// split out seconds into hours, minutes, and seconds
const incomingValue = (seconds) => {
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
const outgoingValue = (hours, minutes, seconds) => {
  const hoursInSeconds = Number(hours) * 60 * 60;
  const minutesInSeconds = Number(minutes) * 60;
  const convertedTime = hoursInSeconds + minutesInSeconds + Number(seconds);
  return convertedTime;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TimeInput = React.forwardRef(({ type, value, onChange }, inputComponent) => {
  const { hours, minutes, seconds } = incomingValue(value);

  focus = () => {
    inputComponent.current.focus()
  }


  const handleTimeChange = (e) => {
    const time = e.target.value.split(':');

    let newVal;

    // hh:mm:ss
    if (time.length > 1) {
      newVal = outgoingValue(time[0], time[1], time[2]);
    } // mm:ss
    else if (time.length > 0) {
      newVal = outgoingValue(0, time[0], time[1]);
    } // ss
    else {
      newVal = time[0]
    }

    onChange(createPatchFrom(String(newVal)))
  }

  return (
    <div>
      <FormField label={type.title} description={type.description} />
      <TextInput
        type="text"
        ref={inputComponent}
        defaultValue={`${hours}:${minutes}:${seconds}`}
        onChange={e => handleTimeChange(e)}
        placeholder="hh:mm:ss"
      />
    </div>
  )
});

export default TimeInput;
