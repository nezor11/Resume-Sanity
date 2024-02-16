import {FaIcons as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Icons',
  name: 'icons',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Icon Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Icon Width',
      type: 'number',
    }),
    defineField({
      name: 'height',
      title: 'Icon Height',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
