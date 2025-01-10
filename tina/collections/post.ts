import { Collection } from "tinacms";
import { markdownFields } from './fields'

const post : Collection = {
    name: "post",
    label: "Posts",
    path: "content/posts",
    fields: markdownFields,
  }
  
const page : Collection = {
    name: "page",
    label: "Pages",
    path: "content",
    match: { // see https://tina.io/docs/reference/collections#matchinclude
      include: "*"
    },
    format: "md",
    fields: markdownFields,
  }

export { post, page }