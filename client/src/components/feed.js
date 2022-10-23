import React, { useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [image, setImage] = useState("");

    const onInputChange = (e) =>{
        setImage(e.target.files[0])
    }


    const onFormSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.post("http://localhost:3001/posts/new", formData, config).then((res)=>{
            console.log("Success");
        }).catch((err)=>{
            console.log("err", err)
        })
    }


    
    
        return(
            <div>
                <form onSubmit={onFormSubmit}>
                    <h1>Feed</h1>
                    <input type="file" name="image" onChange={onInputChange}/>
                    <button type='submit'>upload</button>
                </form>
            </div>
        );
    



}
export default Feed;