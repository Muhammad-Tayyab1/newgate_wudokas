import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { parse } from 'node-html-parser';
import $ from 'jquery'
import Video from '../../images/SEC_Newgate_18.03_10mbps.mp4';

console.log(Video)

const MainSlider = () => {

  const image = useStaticQuery(graphql`
  query {
    image1: file(relativePath: {eq: "BG_3.jpg"}) {
      childImageSharp {
        fluid( quality: 100) {
        src
        }
      }
    }
    image2: file(relativePath: {eq: "BG_2.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
        src
        }
      }
    }
    image3: file(relativePath: {eq: "BG_1.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
        src
        }
      }
    }
    video: file(relativePath: {eq: "SEC_Newgate_18.03_10mbps.mp4"}) {
        id
        publicURL
      }
  }
  `)

  const sliders = [
    {
      id:0,
      image: image.image1.childImageSharp.fluid.src,
      title: 'Hello, good to CEE You!'
    },
    {id: 1,
      image: image.image2.childImageSharp.fluid.src,
      title: `We are a communication agency for the CEE region. <br/> How can we open up new possibilities for you? In a SEC, of course!`
    },
    {id:2,
      image: image.image3.childImageSharp.fluid.src,
      title: `We are a communication agency for the CEE region. <br/> How can we open up new possibilities for you? In a SEC, of course!`
    },
    {id:3,
      video: image.video.publicURL,
      title: ``
    },
  ]

  let interval = null;

  return (
    <div className="slider container-fluid" id="home">
      <Carousel
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
        interval={1000}
        onSlide={(id,e) => {

          if (id === 2) {
            $('.carousel-indicators').find('li').last().trigger('click');

          }else {
            $('#slider-video').get(0).pause();
          }
      }
    }
      onSelect={(id,e) => {


          if (id === 2) {

            if (interval) {
              return;
            }
  
            interval = setInterval(() => {
              let videoPromise = $('#slider-video').get(0).play();;
  
              if (videoPromise) {
                videoPromise.then(() =>  {
                  console.log('success')
                  clearInterval(interval);
                  interval = null;
                }).catch(() => {
                  console.log('error')
                })
              }
  
            },100)
            $('#slider-video').get(0).play();
          }else {
            $('#slider-video').get(0).pause();
          }
        }
      }
        >
                <Carousel.Item>
                  <img className="d-block" src={sliders[0].image} alt="Portfolio" />
                  <Carousel.Caption className="carousel-caption--custom">
                    <h3 >
                      <span dangerouslySetInnerHTML={{ __html: parse(sliders[0].title) }}></span>
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={sliders[1].image}
                    alt="Third slide"
                  />
                  <Carousel.Caption className="carousel-caption--custom">
                  <h3 >
                  <span dangerouslySetInnerHTML={{ __html: parse(sliders[1].title) }}></span>
                  </h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={20000}>
                <video type="video/mp4" className="" id="slider-video" preload="true" autoPlay muted>
                {/* <video type="video/mp4" className="" id="slider-video" preload="true"> */}
                  <source src={'https://youtu.be/rPx5SpBa0Ec'} type="video/mp4"></source>
                </video>
                  <Carousel.Caption className="carousel-caption--custom">
                  <h3 >
                    {sliders[3].title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
      </Carousel>
</div>
  )
}

export default MainSlider
