import React, { useState, useEffect } from 'react'
import { ImageList } from '../helpers/ImageList'
import ImageItem from '../components/ImageItem'
import '../styles/Image.css';
import axios from 'axios';

function Explore() {

  // const [image, setImage] = useState([]);

  // const fetchData = async() => {
  //   const {data} = await axios.get("http://localhost:8081/fetch")
  //   console.log(data.results);
  //   setImage(data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  
  useEffect(() => {
    axios.get("http://localhost:8081/fetch")
    .then(res => console.log(res)) 
    .catch(err => console.log(err));
  }, [])

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
        <button> Reload </button>
      </div>
      
  );
}

export default Explore
