import React, { Component } from "react";
import Slider from "react-slick";
import IndustryItem from '../industryItem'
import $ from 'jquery'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1500,
      cssEase: "linear",
      dots: false,
      centerMode: true,
      arrows: true,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        }
    ],
      afterChange: (oldIndex, newIndex) => {

        $('.section--industry').find(`.slick-slide`).removeClass('industry-item--active industry-item--hide');

      },
      beforeChange: (oldIndex, newIndex) => {

        $('.section--industry').find(`.slick-slide`).removeClass('industry-item--active industry-item--hide');

        $('.section--industry').find(`.slick-slide[data-index="${oldIndex}"]`).find('.industry-item').removeClass('industry-item--active').addClass('industry-item--hide')
        $('.section--industry').find(`.slick-slide[data-index="${newIndex}"]`).find('.industry-item').removeClass('industry-item--hide').addClass('industry-item--active')

      }
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.data.map((industry, i) => {
             return <IndustryItem key={i} industry={industry}></IndustryItem>
          })}
        </Slider>
      </div>
    );
  }
}