import React from "react"
import $ from 'jquery'
import IndustriesSlider from '../components/Sliders/industriesSlider'
import { useStaticQuery, graphql } from "gatsby"


const IndustrySection = ({data}) => {

  const image = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "BG_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
        src
      }
      }
    }
  }
  `)
  

  return (
    <div className="section section--industry" id="industry" style={{
    backgroundImage: `url(${image.file.childImageSharp.fluid.src})`
  }}>
      <div className="section__title">INDUSTRIES</div>
      <IndustriesSlider data={data}/>
    </div>
  )
}

  


export default IndustrySection


{/* <div className="section section--industry" id="industry">
    <div className="section__title">Branże</div>
    {/* <div className="section__content">    
      {data.map((industry, i) => {
          return <IndustryItem key={i} industry={industry}></IndustryItem>
      })}
    </div> */}
//     <IndustriesSlider data={data}/>
// </div> */}