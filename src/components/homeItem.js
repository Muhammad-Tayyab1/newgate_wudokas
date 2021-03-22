import React from "react"


const HomeItem = ({data}) => {

    console.log(data)
  return (
<div className="home-item">
    <img className="home-item__background"
        src={data.image}/>
    <div className="home-item__title">
        {data.title}
    </div>
</div>
  )
}

export default HomeItem
