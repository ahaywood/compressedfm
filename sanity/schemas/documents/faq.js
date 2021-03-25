import { RiQuestionnaireLine as icon } from "react-icons/ri"
export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Question',
      name: 'question',
      type: 'text'
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'blockContent'
    },
    {
      title: 'Published',
      name: 'published',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'title',
      question: 'question',
      published: 'published',
    },
    prepare(selection) {
      const { title, question, published } = selection
      return Object.assign({}, selection, {
        title: `${title} ${published ? "✅" : '❌'}`,
        subtitle: question,
      })
    },
  },
}