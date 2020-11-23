import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Articles from "../components/Articles"
// ...GatsbyImageSharpFluid

const Article = ({
  data: 
    {
      allStrapiArticles:{ nodes: articles}, 
    },
  }) => {
  return <Layout>
    <section className="articles-page">
      <Articles articles={articles} title="My Article" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiArticles {

    nodes {
      slug
      content
      description
      dated(formatString: "MMM Do, YYYY")
      id
      title
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
` 

export default Article
