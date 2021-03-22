import React from "react"
import PeopleSlider from '../components/Sliders/peopleSlider'

const PeopleSection = ({data}) => {

  return (

 <div className="section section--people" id="people">
  <div className="section__title">EXPERTS</div>
    <PeopleSlider data={data}/>
  </div>
  )
}

  


export default PeopleSection