import React from 'react'
import './Card.css'
const Card = (props) => {
  const classes ='card ' + props.className;
  return (
    // for css to be in effect for custom component
   
    <div className={classes}>{props.children}</div>
  )
}

export default Card
