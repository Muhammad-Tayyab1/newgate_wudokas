import React from "react"


const SocialItem = ({social}) => {

  return (
    <li className="social-item">
    <a className="social-item__link" target="_blank" rel="noreferrer" href={social.link}>{social.title}</a>
    </li>
  )
}

export default SocialItem
