import { Collection } from "tinacms";
import { pageFields, journalFields } from './fields'

const journalPrompts : Collection = {
    name: "journalPrompt",
    label: "Journal Prompts",
    path: "content/journal-prompts",
    match: { // see https://tina.io/docs/reference/collections#matchinclude
      include: "*"
    },
    format: "md",
    fields: journalFields,
  }
  
const page : Collection = {
    name: "page",
    label: "Pages",
    path: "content",
    match: { // see https://tina.io/docs/reference/collections#matchinclude
      include: "*"
    },
    format: "md",
    fields: pageFields,
  }

export { journalPrompts as post, page }