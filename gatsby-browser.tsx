/* eslint-disable import/prefer-default-export */
import { StrictMode } from "react";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props, ...others }) {
  return (
    <StrictMode>
      <Layout {...props}>{element}</Layout>
    </StrictMode>
  );
}
