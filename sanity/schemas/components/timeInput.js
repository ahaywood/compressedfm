import React, { useState, useEffect, useRef } from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import { Box, TextInput, Flex, Label } from '@sanity/ui';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

import {
  convertTimeString,
  convertToSeconds,
  getHoursMinutesSeconds,
} from '../parts/convertTime';

// sanity's patch event
const createPatchFrom = (value) => {
  return PatchEvent.from(value === '' ? unset() : set(value));
};

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TimeInput = React.forwardRef(
  ({ type, value, onChange }, inputComponent) => {
    const { hours, minutes, seconds } = getHoursMinutesSeconds(value);

    focus = () => {
      inputComponent.current.focus();
    };

    const handleTimeChange = (e) => {
      const newVal = convertTimeString(e.target.value);
      onChange(createPatchFrom(newVal));
    };

    return (
      <div>
        <FormField label={type.title} description={type.description} />
        <TextInput
          type="text"
          ref={inputComponent}
          defaultValue={`${hours}:${minutes}:${seconds}`}
          onChange={(e) => handleTimeChange(e)}
          placeholder="hh:mm:ss"
        />
      </div>
    );
  }
);

export default TimeInput;
