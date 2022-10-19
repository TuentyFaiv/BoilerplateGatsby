import { graphql, useStaticQuery } from "gatsby";

import type { SEOProps } from "@typing/proptypes";

export default function SEO({ title, description, meta = [] }: SEOProps) {
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
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      {/* Open Graph */ }
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* Twitter */ }
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.meta?.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map((metaProps, index) => (
        <meta key={`${index + 1}`} {...metaProps} />
      ))}
    </>
  );
}
