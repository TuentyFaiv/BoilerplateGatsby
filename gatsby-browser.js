// eslint-disable-next-line no-unused-vars
const React = require("react");
const { default: Layout } = require("./src/components/Layout");

exports.wrapPageElement = ({ element, props }) => (
  <React.StrictMode>
    <Layout {...props}>{element}</Layout>
  </React.StrictMode>
);
