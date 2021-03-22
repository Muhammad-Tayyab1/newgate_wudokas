import React from "react"
import { parse } from 'node-html-parser';


const ServiceItem = ({service}) => {

  let wpHTML = parse(service.content.rendered)

  return (
<div className="service-item">
  <div className="service-item__title">{service.service_title}</div>
  <div className="service-item__description">{service.service_description}</div>
  <div className="service-item__wp_html" dangerouslySetInnerHTML={{ __html: wpHTML }}></div>

</div>
  )
}

export default ServiceItem
