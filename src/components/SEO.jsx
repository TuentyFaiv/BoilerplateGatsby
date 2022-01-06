import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default function SEO({ description, lang, meta = [], title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          title
          description
          image
          author
        }
      }
    }
  `);

  const metaDescription = description || site.meta.description;
  const defaultTitle = site.meta?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: site.meta?.author || ""
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
}
