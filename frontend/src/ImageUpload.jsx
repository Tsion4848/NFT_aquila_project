import React from 'react'
import { Photo } from '@mui/icons-material'
import { useState } from 'react'
// import './styles/Contact.css'
// import './styles/Upload.css'
import axios from 'axios'

function ImageUpload() {
    // const [file, setFile] = useState();
    
    // const handleImage = (e) => {
    //     setFile(e.target.files[0])
    // }
    // const handleUpload = () => {
    //     const formdata = new FormData();
    //     formdata.append('image', file);
    //     axios.post('http://localhost:8081/submit', formdata)
    //     .then(res => {
    //         if (res.data.Status === "Success") {
    //             console.log("Succeded");
    //         }
    //         else {
    //             console.log("Failed");
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    // const handleInfoUpload = () => {
    //     const formdata = new FormData();
    //     formdata.append('image', file);
    //     axios.post('http://localhost:8081/infoUpload', formdata)
    //     .then(res => {
    //         if (res.data.Status === "Success") {
    //             console.log("Succeded");
    //         }
    //         else {
    //             console.log("Failed");
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [image, setImage] = useState('null');

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('photographer', photographer);
        formData.append('price', price);
        formData.append('duration', duration);
        formData.append('image', image);

        axios.post('http://localhost:8081/image', formData)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        });
    }

  return (
    <div>
        <div className='title'>
            <h1>Upload your NFT art here</h1>
        </div>
        <div className='contact'>
            <form onSubmit={handleSubmit} id='contact-form'>
            {/* <div className='left'> */}
                <Photo id='photoIcon' />
                <input id='chooseFile' type='file' name='image' onChange={event => setImage(event.target.files[0])}/>
                {/* <button className='photoButton' onClick={handleUpload}>Upload</button> */}
            {/* </div>
            <div className='right'> */}
                {/* <form id='contact-form' method='POST'> */}
                    <label htmlFor='name'>Photo Name</label>
                    <input name='name' placeholder='Enter full name' type='text' value={name} onChange={event => setName(event.target.value)}/>                    
                    <label htmlFor='description'>Description</label>
                    <input name='description' placeholder='Enter description' type='text' value={description} onChange={event => setDescription(event.target.value)}/>                    
                    {/* <textarea rows="6" placeholder="Enter your photo description" name="description"></textarea> */}
                    <label htmlFor='photographer'>Photographer</label>
                    <input name='photographer' placeholder='Enter photographer name' type='text' value={photographer} onChange={event => setPhotographer(event.target.value)}/>
                    <label htmlFor='price'>Floor Price</label>
                    <input name='price' placeholder='Enter floor price' type='number' value={price} onChange={event => setPrice(event.target.value)}/>
                    <label htmlFor='duration'>Auction Duration</label>
                    <input name='duration' type='date' placeholder='Enter auction duration' value={duration} onChange={event => setDuration(event.target.value)}/>
                    {/* <Link to="/successUpload"> */}
                        <button type='submit'>Submit</button>
                    {/* </Link> */}
                {/* </form> */}
            {/* </div> */}
            </form>
        </div>      
    </div>
  );
}

export default ImageUpload
