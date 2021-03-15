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
      return {
        title: `${time} :: ${description}`
      }
    }
  },
  fields: [
    {
      title: 'Time',
      name: 'time',
      type: 'string',
      description: 'mm:ss'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    }
  ]
}