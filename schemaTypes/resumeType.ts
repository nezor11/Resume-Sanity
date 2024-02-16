// ./schemas/resumeType.ts

import {MdLocalMovies as icon} from 'react-icons/md'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  type: 'document',
  title: 'Resume',
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'header',
          type: 'header',
          validation: (Rule) => Rule.required(),
        }),
        defineArrayMember({
          name: 'infoSection',
          type: 'infoSection',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'pdfResume',
      title: 'CV in PDF',
      type: 'file',
      description: 'PDF for printing a physical CV',
    }),
  ],
})
