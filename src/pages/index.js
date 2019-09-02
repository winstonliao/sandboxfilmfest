import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../sections/heroSection"
import HowItWorksSection from '../sections/howItWorksSection'
import WatchSection from '../sections/watchSection'
import AboutSection from '../sections/aboutSection'
import SignUpSection from '../sections/signUpSection'
import ContactSection from '../sections/contactSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection id='hero'></HeroSection>
    <HowItWorksSection id='how_it_works'></HowItWorksSection>
    <WatchSection id='watch'></WatchSection>
    <AboutSection id='about'></AboutSection>
    <SignUpSection id='sign_up'></SignUpSection>
    <ContactSection id='contact'></ContactSection>
  </Layout>
)

export default IndexPage
