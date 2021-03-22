import React, {useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faGripLines } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"
import Logo from '../images/logo.svg'




const Navigation = ({modificator}) => {

  const [showMenu, toggleMenu] = useState(false);

  useEffect(() => {


    $('.navigation__list').find('.navigation__item').off('click').on('click', function(e) {
      let anchor = $(this).attr('data-view-anchor');
      $('body').css({
        'overflow': 'auto'
      })


      toggleMenu(false);

      $('html,body').animate({scrollTop: $(`.section[id="${anchor}"]`).offset().top},'slow');
    })
  })


  return (

    <>
    {showMenu === true ?
      (
        <div className={`navigation navigation--full-window ${modificator ? 'navigation--' + modificator : ''}`}>
          <div className="navigation__wrapper">
              <ul className="navigation__list">
                <li className="navigation__item" data-view-anchor="home">HOME</li>
                <li className="navigation__item" data-view-anchor="services">PRACTICES AND SERVICES</li>
                <li className="navigation__item" data-view-anchor="people">OUR TEAM</li>
                <li className="navigation__item" data-view-anchor="industries">INDUSTRIES</li>
                <li className="navigation__item" data-view-anchor="map">REGION</li>
                <li className="navigation__item" data-view-anchor="followus">FOLLOW US</li>
                <li className="navigation__item" data-view-anchor="followus">CONTACT</li>
                
              </ul>
          </div>
          <div className="navigation__button navigation__button--close" onClick={() => {
            $('body').css({
              'overflow': 'auto'
            })
            toggleMenu(false);
            }}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>
      )
     : (
      <div className={`navigation ${modificator ? 'navigation--' + modificator : ''}`}>
          <div className="navigation__wrapper">
          <img src={Logo} alt="logo"/>

          </div>
          <div className="navigation__button navigation__buttton--toggle" onClick={() => {


            $('body').css({
              'overflow': 'hidden'
            })

            toggleMenu(true);
            }}>
            <FontAwesomeIcon icon={faGripLines} size="2x" />
            </div>
         </div>
     )}
   </>
  )
}

export default Navigation
