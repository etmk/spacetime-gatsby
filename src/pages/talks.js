import React from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config from '../../data/site-config'

import Layout from '../components/layout'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

const TalksPage = () => (
  <Layout>
    <Helmet>
      <title>{`Speaking Events 🎙 Spacetime public talks and presentations`}</title>
      <meta name="description" content="Speaking events. Slide decks from various public speaking events by the Spacetime team." />
      <meta name="keywords" content="speaking events" />
      <link rel="canonical" href={`${config.siteUrl}/talks/`} />
    </Helmet>

    <PageHero>
      <h1 className="t-headline">Speaking Events&mdash;<span className="o-40">straight from the horses&nbsp;mouth</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 bg-fog-white">
        <div className="row flex-ns">
          <div className="w-50-ns">
            <h3 className="black-80 f3 f2-ns fw6 lh-title mt0">Startups for Non-Technical Founders</h3>
            <p>Published December 8, 2017</p>
            <p><OutboundLink
              href="https://www.slideshare.net/CalebSylvest/startups-for-nontechnical-founders-83670062"
              target="_blank">
              Presentation on Slideshare &rarr;
            </OutboundLink></p>
          </div>
          <div className="w-50-ns">
            <iframe title="Startups for Non-Technical Founders Slide Presentation" src="//www.slideshare.net/slideshow/embed_code/key/D1HLYVB92MFViw" width="595" height="485" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="pv5 bg-white">
        <div className="row flex-ns">
          <div className="w-50-ns">
            <h3 className="black-80 f3 f2-ns fw6 lh-title mt0">SEO for Everyone</h3>
            <p>Published January 25, 2019</p>
            <p><em>Will be published soon</em></p>
          </div>
          <div className="w-50-ns">
          </div>
        </div>
      </section>

    </MainWrapper>

  </Layout>
)

export default TalksPage
