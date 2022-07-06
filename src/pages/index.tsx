import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SEO } from "@components";

const IndexPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <SEO title="Home" />
      <h1>
        {`Translation: ${t("title-home")}`}
      </h1>
      <p>Develop me here</p>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
