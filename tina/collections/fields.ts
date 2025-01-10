import { TinaField } from 'tinacms'
import { draft, title } from './frontmatter'
import { markdownContent } from "./markdown"

const markdownFields : TinaField<false>[] = [
    title, 
    draft,
    markdownContent
]

export {
    markdownFields
}