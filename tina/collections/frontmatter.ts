
import { TinaField } from 'tinacms'

const draft : TinaField = {
    type: "boolean",
    name: "draft",
    label: "Draft",
    required: false,
}

const title : TinaField = {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
}



export { draft, title }
