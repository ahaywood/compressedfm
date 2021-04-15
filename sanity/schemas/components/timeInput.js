import React from 'react'
import PropTypes from 'prop-types'
import { withDocument } from 'part:@sanity/form-builder'

import FormField from 'part:@sanity/components/formfields/default'
import { Box, TextInput, Flex } from '@sanity/ui'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

function createPatchFrom(value) {
  PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

// split out seconds into hours, minutes, and seconds
const incomingValue = (seconds) => {
  // determine how many minutes
  let hours = 0;
  let remainingMinutes = 0;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // are there hours?
  if (minutes > 59) {
    hours = minutes / 60;
    remainingMinutes = Math.floor(minutes % 60);
  }

  return {
    hours,
    minutes: remainingMinutes ? remainingMinutes : minutes,
    seconds: remainingSeconds
  }

}

// convert time to seconds
const outgoingValue = (hours, minutes, seconds) => {
  const hoursInSeconds = hours * 60 * 60;
  const minutesInSeconds = minutes * 60;
  return hoursInSeconds + minutesInSeconds + seconds;
}

const TimeInput = ({ type, value, onChange, inputComponent }) => {
  const { hours, minutes, seconds } = incomingValue(value);
  return (
    <div>
      <FormField label={type.title} description={type.description} />
      <Flex>
        <Box>
          <TextInput
            type="text"
            // ref={ref}
            placeholder="hh"
            value={hours}
            defaultValue={hours}
            onChange={event => { onChange(PatchEvent.from(set(event.target.value))) }}
          />
        </Box>
        <Box>:</Box>
        <Box>
          <TextInput
            type="text"
            // ref={ref}
            placeholder="mm"
            value={minutes}
            defaultValue={minutes}
            onChange={event => { onChange(PatchEvent.from(set(event.target.value))) }}
          />
        </Box>
        <Box>:</Box>
        <Box>
          <TextInput
            type="text"
            // ref={ref}
            placeholder="ss"
            value={seconds}
            defaultValue={seconds}
            onChange={event => { onChange(PatchEvent.from(set(event.target.value))) }}
          />
        </Box>
      </Flex>
    </div>
  )
}

export default TimeInput
