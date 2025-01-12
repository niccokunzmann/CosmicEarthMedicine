
import { TinaField } from 'tinacms'

const draft : TinaField = {
    type: "boolean",
    name: "draft",
    label: "Draft",
    required: false,
}

const whatWeDoHere : TinaField = {
    type: "boolean",
    name: "whatWeDoHere",
    label: "List in 'What We Do Here'?",
    required: false,
}

const linkTitle : TinaField = {
    type: "string",
    name: "linkTitle",
    label: "Title for links (like 'Home' or 'About')",
}


const title : TinaField = {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
}


const frontmatter : TinaField<false>[] = [
    title,
    draft,
    whatWeDoHere,
    linkTitle,
]


export { frontmatter }
