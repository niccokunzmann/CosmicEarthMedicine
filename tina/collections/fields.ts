import { TinaField } from 'tinacms'
import frontmatter from './frontmatter'
import { markdownContent } from "./markdown"

const pageFields : TinaField<false>[] = [
    frontmatter.title,
    frontmatter.draft,
    frontmatter.whatWeDoHere,
    frontmatter.linkTitle,
    markdownContent
]

const journalFields : TinaField<false>[] = [
    frontmatter.title,
    frontmatter.date,
    markdownContent
]



export {
    pageFields, journalFields
}