import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../sections/heroSection"
import HowItWorksSection from '../sections/howItWorksSection'
import WatchSection from '../sections/watchSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection></HeroSection>
    <HowItWorksSection></HowItWorksSection>
    <WatchSection></WatchSection>
  </Layout>
)

export default IndexPage
