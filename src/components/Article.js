import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Article = ({id, title, image, dated, category, slug, description, content }) => {
  return <Link to={`/articles/${slug}`} className="articles" key={id}> 
    <article>
      {/* <Image fluid={image.childImageSharp.fluid} className="articles-img" /> */}
      <div className="articles-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="articles-footer">
          <p>{category}</p>
          <p>{dated}</p>
        </div>
      </div>
    </article>
  </Link>
}

Article.propTypes = {}

export default Article
