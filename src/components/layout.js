/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './footer';
import { Helmet } from "react-helmet"
import "./layout.css"

const Layout = ({ children }) => {
  const settings = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      },
      allWp {
        nodes {
          allSettings {
            generalSettingsDescription
            generalSettingsEmail
            generalSettingsLanguage
          },
          generalSettings {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{settings.allWp.nodes[0].generalSettings.title}</title>
          <link rel="canonical" href={settings.allWp.nodes[0].generalSettings.url} />
      </Helmet>
      <div>
        <main>{children}</main>
        <Footer/>

      </div>
    </>
  )
}
export default Layout
