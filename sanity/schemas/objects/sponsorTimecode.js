import TimeInput from "../components/timeInput";
import { getHoursMinutesSeconds } from "../parts/convertTime";

export default {
  name: "sponsorTimecode",
  title: "Sponsor with Timecode",
  type: "object",
  fields: [
    { name: "sponsor", title: "Sponsor", type: "reference", to: { type: 'sponsor' } },
    { name: "adStart", title: 'Ad Starts', type: 'string', inputComponent: TimeInput, },
    { name: "adEnd", title: 'Ad Ends', type: 'string', inputComponent: TimeInput, },
  ],
  preview: {
    select: {
      sponsor: 'sponsor.title',
      adStart: 'adStart',
      adEnd: 'adEnd'
    },
    prepare(selection) {
      const { sponsor, adStart, adEnd } = selection;
      const adStartTimecode = getHoursMinutesSeconds(adStart);
      const adEndTimecode = getHoursMinutesSeconds(adEnd);
      return {
        title: `${sponsor} - ${adStartTimecode.hours}:${adStartTimecode.minutes}:${adStartTimecode.seconds} - ${adEndTimecode.hours}:${adEndTimecode.minutes}:${adEndTimecode.seconds}`
      }
    }
  }
};
