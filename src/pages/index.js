import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../sections/heroSection"
import HowItWorksSection from '../sections/howItWorksSection'
import WatchSection from '../sections/watchSection'
import AboutSection from '../sections/aboutSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection></HeroSection>
    <HowItWorksSection></HowItWorksSection>
    <WatchSection></WatchSection>
    <AboutSection></AboutSection>
  </Layout>
)

export default IndexPage
