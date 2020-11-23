import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
// import SEO from "../components/SEO"

const ComponentName = ({data}) => {
  const {content, title, dated, category, description } = data.article

  return (
    <Layout>
      {/* <SEO title={title} description={desc} /> */}
      <section className="article-template">y
        <div className="section-center">
          <article className="article-content">
            <h4>{title}</h4>
            <ReactMarkdown 
              source={content} 
              transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
            />
          </article>
          <Link to="/Article" className="btn center-btn">Articles</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query GetSingleArticle($slug: String) {
  article: strapiArticles(slug: { eq: $slug }) {
    content
    title
    description
  }
}
`

export default ComponentName
