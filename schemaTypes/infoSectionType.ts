import {FaList} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoSection',
  title: 'Info Section',
  type: 'object',
  fields: [
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'reference',
      to: [{type: 'icons'}],
    }),
    defineField({
      name: 'titleSection',
      title: 'Title Section',
      type: 'string',
    }),
    defineField({
      name: 'subtitleSection',
      title: 'Subtitle Section',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'infoItem'}],
    }),
  ],
  icon: FaList,
  preview: {
    select: {
      title: 'titleSection',
    },
    prepare({title}) {
      return {
        title: title || 'No title section',
      }
    },
  },
})
