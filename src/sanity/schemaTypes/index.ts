import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import chef from './chef'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chef],
}
