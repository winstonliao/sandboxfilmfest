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
import EventSection from '../sections/eventSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" image='https://sandboxfilmfest.org/images/film.jpg' width='400' height='225'/>
    <HeroSection id='hero'></HeroSection>
    <HowItWorksSection id='how_it_works'></HowItWorksSection>
    <WatchSection id='watch'></WatchSection>
    {/* <EventSection id='event'></EventSection> */}
    <SignUpSection id='sign_up'></SignUpSection>
    <AboutSection id='about'></AboutSection>
    <ContactSection id='contact'></ContactSection>
  </Layout>
)

export default IndexPage
