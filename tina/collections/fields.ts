import { TinaField } from 'tinacms'
import { frontmatter } from './frontmatter'
import { markdownContent } from "./markdown"

const markdownFields : TinaField<false>[] = frontmatter.concat([
    markdownContent
])

export {
    markdownFields
}