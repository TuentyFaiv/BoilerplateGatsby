import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { CreateBabelConfigArgs, CreateWebpackConfigArgs } from "gatsby";

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
      plugins: [
        new TsconfigPathsPlugin({
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        })
        // new MiniCssExtractPlugin()
      ]
    }
    // module: {
    //   rules: [
    //     {
    //       test: /\.s?css$/,
    //       use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    //     }
    //   ]
    // }
  });
}
