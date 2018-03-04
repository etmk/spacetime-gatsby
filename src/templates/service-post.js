import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

export default function Template({data}) {
  const {markdownRemark: service} = data;

  return (
    <div>
      <Helmet title={`${service.frontmatter.title} | ${config.siteTitle}`} />

      <Link
        to="services"
        title="Back to Services">
        Back to Services
      </Link>
      <p>this is the service post template</p>
      <h1>{service.frontmatter.title}</h1>
      <h5>Created on {service.frontmatter.date}</h5>
      <div dangerouslySetInnerHTML={{__html: service.html}} />
    </div>
  )
}

export const serviceQuery = graphql`
  query ServiceTypeByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
