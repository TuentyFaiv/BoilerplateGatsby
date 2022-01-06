const path = require("path");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic"
    }
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@icons": path.resolve(__dirname, "src/assets/images/icons"),
        "@videos": path.resolve(__dirname, "src/assets/videos"),
        "@fonts": path.resolve(__dirname, "src/assets/fonts"),
        "@boot": path.resolve(__dirname, "src/common/boot.js"), // Change
        "@functions": path.resolve(__dirname, "src/common/functions.js"), // Change
        "@config": path.resolve(__dirname, "src/common/config.js"),
        "@schemas": path.resolve(__dirname, "src/common/schemas/index.js"),
        "@services": path.resolve(__dirname, "src/common/services/index.js"),
        "@components": path.resolve(__dirname, "src/components"),
        "@containers": path.resolve(__dirname, "src/containers"),
        "@context": path.resolve(__dirname, "src/context/AppContext.jsx"),
        "@hooks": path.resolve(__dirname, "src/hooks/index.js"),
        "@hoc": path.resolve(__dirname, "src/hoc"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@stylesComponents": path.resolve(__dirname, "src/styles/components"),
        "@stylesPages": path.resolve(__dirname, "src/styles/pages"),
        "@styles": path.resolve(__dirname, "src/styles/Globals.scss")
      }
    }
  });
};
