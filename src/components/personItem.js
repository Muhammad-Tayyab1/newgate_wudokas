import React from "react"


const PersonItem = ({person}) => {
  const ParseBio = (person) => {
    console.log("person");
  };

  return (
    <div className="person-item">
      <div className="person-item__wrapper">
        <div className="person-item__image" style={{ backgroundImage: `URL("${person.image.url}")` }}></div>
        <div className="person-item__info">
          <div className="person-item__info--name">{person.first_name + ' ' + person.last_name}</div>
          <div className="person-item__info--description">{person.description}</div>
          <div className="person-item__info--bio">{person.bio.split(".").slice(0,2).join(".")}
            {/*<p class="person-read-more" onClick={ParseBio(person)}>[read more]</p>*/}
          </div>
        </div>
      </div>

    </div>
  )
}

export default PersonItem
