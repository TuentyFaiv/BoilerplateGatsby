import { config as loadEnv } from "dotenv";
import projectConfig from "@config";

import type { GatsbyConfig } from "gatsby";

loadEnv({
  path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: projectConfig.api_local,
    title: projectConfig.brand,
    author: projectConfig.author,
    image: ""
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icons/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/videos/"
      },
      __key: "videos"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/common/locales`,
        name: "locale"
      },
      __key: "locale"
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: projectConfig.i18n_langs,
        defaultLanguage: projectConfig.i18n_fallback_lang,
        siteUrl: projectConfig.api_local,
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false,
          ns: [
            "about",
            "contact",
            "footer",
            "formik",
            "header",
            "heros",
            "home",
            "terms",
            "translation"
          ]
        }
      }
    }
  ]
};

export default config;
