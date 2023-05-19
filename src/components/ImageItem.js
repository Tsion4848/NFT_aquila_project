import React from 'react' // accept props and render ui based on those props

function ImageItem({ image, name, price, description }) {
  return (
    <div className='imageItem'>
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1>{ name }</h1>
      <p>{price}</p>
      <h5>{ description }</h5>
    </div>
  )
}

export default ImageItem
