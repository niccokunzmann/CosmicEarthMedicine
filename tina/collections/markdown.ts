
import { TinaField } from 'tinacms'

const markdownContent: TinaField = {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
    templates: [
        {
            name: 'figure',
            label: 'figure',
            match: {
                start: '{{<',
                end: '>}}',
            },
            fields: [
                {
                    name: 'src',
                    label: 'src',
                    type: 'image',
                    required: true,
                    ui: {
                        component: 'image-uploader',
                    },
                },
                {
                    name: 'title',
                    label: 'title',
                    type: 'string',
                    required: true,
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    name: 'caption',
                    label: 'caption',
                    type: 'string',
                    required: true,
                    ui: {
                        component: 'textarea',
                    },
                },

            ]
        }
    ]
}

export { markdownContent }
