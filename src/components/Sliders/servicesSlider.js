import React, { Component } from "react";
import Slider from "react-slick";
import ServiceItem from '../serviceItem';


export default class ServicesSLider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    //   speed: 4000,
    //   autoplaySpeed: 1500,
    //   cssEase: "linear",
    //   centerMode: true,
    //   arrows: true,
    //   className: "center",
    //   infinite: true,
    //   centerPadding: "60px",

    };
    return (
      <div className="section-slider section-slider--services container">
        <Slider {...settings}>          
            {this.props.data.map((service, i) => {
                return <ServiceItem key={i} service={service}></ServiceItem>
            })}
        </Slider>
      </div>
    );
  }
}