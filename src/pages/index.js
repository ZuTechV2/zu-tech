import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Hpcontent from "../components/Hpcontent"
// import Articles from "../components/Articles"

export default ({data}) => {

  // const {
  //   allStrapiArticles: {nodes:articles}
  // } = data

  return (
    <Layout>
      {/* <SEO title="Home" description="this is our home page" /> */}
      {/* <heads/> */}
      <Intro/>
      <Hpcontent/>
      {/* <Articles articles={articles} title="Latest Articles" showLink /> */}
      {/* <contacts/> */}
      {/* <footer/> */}
    </Layout>
  )
}

// export const query = graphql`
// {
//   allStrapiArticles {
//     nodes {
//       id
//       content
//       dated
//       slug
//       title
//     }
//   }
// }
// `