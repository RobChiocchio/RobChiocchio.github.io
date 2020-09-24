import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Projects } from "components/landing";
import { Footer } from "components/theme";
export default () => (
    <Layout>
        <SEO />
        <Intro />
        <Projects />
        <Skills />
        <Footer />
    </Layout>
);
