// import path from "path";
import type { CreateBabelConfigArgs, CreateWebpackConfigArgs } from "gatsby";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export function onCreateBabelConfig({ actions }: CreateBabelConfigArgs) {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic"
    }
  });
}

export function onCreateWebpackConfig({ actions }: CreateWebpackConfigArgs) {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin({
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      })]
    }
  });
}
