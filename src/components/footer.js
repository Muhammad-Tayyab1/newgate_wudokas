import React from "react"


const Footer = () => {

  return (
    <footer className="footer">

          <div className="footer__wrapper">
            <div className="footer__row footer__row--top">
                <div className="footer__item footer__item--m footer__item--bold footer__item--href">Contact us</div>
            </div>
            <div className="footer__row footer__row--info-w">
                <div className="footer__item footer__item--s">
                  <a href="mailto:hello@secnewgatecee.com" style={{color: 'inherit'}}>hello@secnewgatecee.com</a><br />
                  Krakowskie Przedmieście 13, 5th floor, 00-071 Warsaw<br />
                  KRS: 0000879140 NIP: 5213918339 REGON: 387909319
                </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer
