import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Articles from "../components/Articles"
import Tips from "../components/Tips"

const query = graphql`
{
  allStrapiArticles(sort: {fields: dated, order: DESC}, limit: 3) {
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

const Hpcontent = () => {

  const data = useStaticQuery(query);
  const {allStrapiArticles: {nodes:articles}} = data

  return (
    <section className="hpcontent">
      <div className="hpcontent-dtl">
        <Articles articles={articles} title="HP Latest Articles!" showLink />
        <Tips title="Tips!" showLink />
       </div>s
    </section>
  )
}

export default Hpcontent

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
