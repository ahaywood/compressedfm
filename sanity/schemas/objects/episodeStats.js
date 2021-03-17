export default {
  type: 'object',
  name: 'episodeStats',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{ type: 'stat' }]
    },
  ]
}