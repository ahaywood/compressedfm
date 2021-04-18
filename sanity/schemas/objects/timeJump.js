import TimeInput from "../components/timeInput";
import { getHoursMinutesSeconds } from "../parts/convertTime";

export default {
  type: 'object',
  name: 'timeJump',
  preview: {
    select: {
      time: 'time',
      description: 'description',
    },
    prepare(selection) {
      const { time, description } = selection
      const { hours, minutes, seconds } = getHoursMinutesSeconds(time);
      return {
        title: `${hours}:${minutes}:${seconds} :: ${description}`
      }
    }
  },
  fields: [
    {
      title: 'Time',
      name: 'time',
      type: 'string',
      inputComponent: TimeInput,
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    }
  ]
}