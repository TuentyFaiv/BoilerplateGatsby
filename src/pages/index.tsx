import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import type { HeadFC } from "gatsby";
import type { QueryReturnHead } from "@typing/types";

import { Header, SEO } from "@components";

const IndexPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Header />
      <h1>
        {`Translation: ${t("title-home")}`}
      </h1>
      <p>Develop me here</p>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC<QueryReturnHead> = ({ data: { locales } }) => {
  const home = locales.edges.find(({ node }) => (node.ns === "home"));

  const { "title-seo": titleSeo } = home ? JSON.parse(home.node.data) : {
    "title-seo": ""
  };

  return (
    <SEO title={titleSeo} />
  );
};

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
