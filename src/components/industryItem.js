import React from "react"


const IndustryItem = ({industry}) => {

  return (
<div className="industry-item">
    <div className="industry-item__line"></div>
    <div className="industry-item__name">
        {industry.title}
    </div>

</div>
  )
}

export default IndustryItem
