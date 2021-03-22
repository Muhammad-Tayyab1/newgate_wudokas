import React, { Component } from "react";
import Slider from "react-slick";
import PersonItem from '../personItem'


export default class PeopleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        },
        {
            breakpoint: 860,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,

            }
          },
        ]
    };
    return (
      <div className="section-slider section-slider--people container">
        <Slider {...settings}>          
            {this.props.data.map((person, i) => {
                return <PersonItem key={i} person={person}></PersonItem>
            })}
        </Slider>
      </div>
    );
  }
}


// {this.props.data.map((person, i) => {
//     return <PersonItem key={i} person={person}></PersonItem>
// })}