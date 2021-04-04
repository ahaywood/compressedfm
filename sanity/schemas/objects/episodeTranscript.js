export default {
  type: 'object',
  name: 'episodeTranscript',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'array',
      of: [{ type: 'transcript' }]
    },
  ]
}