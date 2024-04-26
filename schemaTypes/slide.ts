import {FaStickyNote as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Slide',
  name: 'slide',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Slide Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      options: {
        list: [
          {title: 'Novicell', value: 'novicell'},
          {title: 'Ondho', value: 'ondho'},
          {title: 'Imagina group', value: 'imagina_group'},
          {title: 'Mudéjar Creativos', value: 'mudejar_creativos'},
          {title: 'Seeway', value: 'seeway'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Intern', value: 'intern'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'infoUrl',
      title: 'More info at',
      type: 'url',
      description:
        'URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc',
    }),
    defineField({
      name: 'workDate',
      title: 'Work date',
      type: 'datetime',
    }),
    defineField({
      name: 'slideTitle',
      title: 'Slide Title',
      type: 'string',
    }),
    defineField({
      name: 'slideImage',
      title: 'Slide Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slideSummary',
      title: 'Slide Summary',
      type: 'text',
    }),
    defineField({
      name: 'slideDesc',
      title: 'Slide Desc',
      type: 'blockContent',
    }),
    defineField({
      name: 'workDone',
      type: 'array',
      title: 'What I did on this project',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: 'Front-end Development', value: 'front_end'},
          {title: 'Front-end Frameworks', value: 'front_end_frameworks'},
          {title: 'Back-end Development', value: 'back_end'},
          {title: 'Servers and Hosting', value: 'servers_hosting'},
          {title: 'Testing and Debugging', value: 'testing_debugging'},
          {title: 'Security', value: 'security'},
          {title: 'Performance Optimization', value: 'performance_optimization'},
          {title: 'Version Control', value: 'version_control'},
          {title: 'Responsive Design', value: 'responsive_design'},
          {title: 'User Experience (UX) and User Interface (UI) Design', value: 'ux_ui_design'},
          {title: 'Maintenance and Updates', value: 'maintenance_updates'},
          {title: 'SEO (Search Engine Optimization)', value: 'seo'},
          {title: 'Analytics and Metrics', value: 'analytics_metrics'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Slide Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
