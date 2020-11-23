import React from "react"
import Title from "./Title"
import Article from "./Article"
import { Link } from "gatsby"
export const Articles = ({articles, title, showLink}) => {
  return <section className="articles">
    <Title title={title} />
    <div className="articles-center">
      {articles.map(article => {
        return <Article key={article.id} {...article} />
      })}
    </div>
    {showLink && <Link to="/Article" className="btn center-btn">article</Link>}
  </section>
}
export default Articles
