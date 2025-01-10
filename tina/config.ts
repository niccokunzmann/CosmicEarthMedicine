import { defineConfig } from "tinacms";
try {
  require('dotenv').config();
} catch (e) {
  console.log("Could not load .env file - this is ok if you do not run a local build.");
}

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

import { post, page } from "./collections/post";

export default defineConfig({
  branch,

  // You can store those in the .env file.
  // Get this from tina.io https://app.tina.io/projects/e33c1a70-7ece-4d0d-b58a-815dddd3d3bd/overview
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io https://app.tina.io/projects/e33c1a70-7ece-4d0d-b58a-815dddd3d3bd/tokens
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      post,
      page
    ],
  },
});
