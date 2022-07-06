import type { GatsbyConfig } from "gatsby";
import { config as loadEnv } from "dotenv";

loadEnv({
  path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://localhost:8000/",
    title: "TemplateGatsby",
    author: "TemplateGatsby",
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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icons/icon.png"
      }
    },
    "gatsby-plugin-mdx",
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
        languages: ["en", "es"],
        siteUrl: "https://localhost:8000/", // Correct URL
        defaultLanguage: "es",
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false,
          ns: [
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
