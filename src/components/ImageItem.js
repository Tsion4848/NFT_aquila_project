import React, { useState } from 'react' // accept props and render ui based on those props
import { Link, Route, Router } from 'react-router-dom';

function ImageItem({ index, image, name, price, description }) {
 console.log(index)
  
  return (
    <div>
      <Link to={index} className='link'>
      <div className='imageItem'>
          <div style={{ backgroundImage: `url(${image})`}}></div>
          <h1>{ name }</h1>
          {/* <p>{price}</p>
          <h5>{ description }</h5> */}
      </div>
      </Link>
    </div>
  )

}

export default ImageItem
