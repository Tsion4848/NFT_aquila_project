import React from 'react'
import { ImageList } from '../helpers/ImageList'
import ImageItem from '../components/ImageItem'
import '../styles/Image.css';

function Explore() {
  return (
    <div className='image'>
      <h1 className='imageTitle'>Arts</h1>
      <div className='imageList'>
        {ImageList.map((imageItem, key) => {           
        return (
            <ImageItem 
                key={key}
                image={imageItem.image} 
                name={imageItem.name} 
                index={imageItem.index}
                lat={imageItem.lat}
                lon={imageItem.lon}
                // price={imageItem.price} 
                // description={imageItem.description}
                />
          );


      })} 
      </div>
    </div>
  );
}

export default Explore
