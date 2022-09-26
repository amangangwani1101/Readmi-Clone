import React from 'react'
import '../styles/NavCard.css'
const NavCard = ({name,price,image,index}) => {
  return (
    <div>
        <div className="NavCard">
            <img src={image} alt={`${index} phone`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    </div>
  )
}

export default NavCard