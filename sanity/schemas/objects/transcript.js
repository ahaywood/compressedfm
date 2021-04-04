import React from "react";

import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

export default {
  type: 'object',
  name: 'transcript',
  title: 'Transcript',
  fields: [
    {
      title: 'Speaker',
      name: 'speaker',
      type: 'string'
    },
    {
      title: 'Timestamp',
      name: 'timestamp',
      description: 'In seconds',
      type: 'number',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      timestamp: 'timestamp',
      speaker: 'speaker',
      content: 'content'
    },
    prepare(selection) {
      const { speaker, timestamp, content } = selection

      function calculateTime(secs) {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
      }

      return Object.assign({}, selection, {
        title: `${calculateTime(timestamp)} :: ${speaker}`,
        subtitle: content[0].children[0].text,
        media: speaker == 'James' ? FaMale : FaFemale
      })
    }
  }
}