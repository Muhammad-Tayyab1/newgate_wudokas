import React, { useEffect } from "react"
import ServiceItem from '../components/serviceItem'
import { useStaticQuery, graphql } from "gatsby"
import $ from 'jquery'

const ServicesSection = ({data}) => {


const image = useStaticQuery(graphql`
query {
  desktop: file(relativePath: {eq: "BG_1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 100) {
        src
      }
    }
  }
  mobile: file(relativePath: {eq: "BG_1_mobile.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 100) {
        src
      }
    }
  }
}

`)

let imageSource = image.desktop.childImageSharp.fluid.src

if (typeof window !== `undefined`) {
  let width = $('body').width();
  console.log('desktop image')

  if (width < 860) {
    imageSource =image.mobile.childImageSharp.fluid.src
  console.log('mobile image')

  }
}

useEffect(() => {
  if (typeof window !== `undefined`) {
    let width = $('body').width();
    console.log('desktop image')
  
    if (width < 860) {
      imageSource =image.mobile.childImageSharp.fluid.src
    console.log('mobile image')
  
    }
  }
})

  return (
<div className="section section--services container-fluid" id="services" style={{
  backgroundImage: `url(${imageSource})`
}}>
    <div className="section__title">PRACTICES AND SERVICES</div>
    <div className="section__content container">    
    {data.map((service, i) => {
        return <ServiceItem key={i} service={service}></ServiceItem>
    })}
    </div>
</div>
  )
};






export default ServicesSection
