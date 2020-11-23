import React from 'react'
import Image from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  file(relativePath: {eq: "Zu-f-bw.jpg"}) {
    childImageSharp {
      fluid(sizes: "width: 150px") {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Intro = () => {
  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query);

  return <header className="intro">
    <div className='section-center'>

      <article className='intro-myinfo'>
        <div>
          <div className="intro-myinfo-txt-hdr" style={{textAlign:"center"}}><h1>Hey! I'm Zuraiq. I am a software engineer and a story teller.</h1></div>
          <div className='underline'></div>
          <div className="intro-myinfo-txt-dtl" style={{textAlign:"justify"}}><h4>This is my <i>evolving</i> digital garden*, where I will be planting items inch-by-inch. These include my learnings, thoughts and journey.</h4></div>
          <div style={{textAlign:"right"}}><h6>*courtsey: Tom Critchlow's <a href="https://tomcritchlow.com/2019/02/17/building-digital-garden/">Digital Garden</a></h6></div>
          {/* <Link to='/contact' className='btn'>Contact me</Link> */}
        </div>
        <div className="intro-myinfo-img"><Image fluid={fluid} className="intro-image"></Image></div>
      </article>
    </div>
  </header>
}

export default Intro


