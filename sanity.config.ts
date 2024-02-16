import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Resume',

  projectId: '6zr8au58',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
