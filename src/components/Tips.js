import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
export const Tips = ({title, showLink}) => {
  return <section className="tips">
    <Title title={title} />
    <div className="tips-center">Testing</div>
    {showLink && <Link to="/tips" className="btn center-btn">tips</Link>}
  </section>
}

export default Tips
