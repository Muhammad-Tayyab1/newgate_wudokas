import React from "react"
import SocialItem from '../components/socialItem'

const SocialSection = ({data}) => {


  return (
<div className="section section--social" id="followus">

<div className="section__title section__title--social">FOLLOW US</div>
    <div className="section__content">   
    <ul className="section__list">
      {data.map((social, i) => {
          return <SocialItem key={i} social={social}></SocialItem>
      })}
    </ul> 

    </div>
</div>
  )
}

  


export default SocialSection
