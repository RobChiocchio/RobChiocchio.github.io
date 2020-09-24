import React from "react";
import { Layout, SEO } from "components/common";
import { AnimBG, TreeNav } from "components/experimental";

export default () => (
    <Layout>
        <SEO title="experimental page" location="/x" />
        <AnimBG />
        <TreeNav />
    </Layout>
);
