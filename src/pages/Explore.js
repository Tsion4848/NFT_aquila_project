import React from 'react'
import { ImageList } from '../helpers/ImageList'
import ImageItem from '../components/ImageItem'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; // to be able to navigate from pages to pages using search bar
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
