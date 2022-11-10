import React, { useState } from 'react';
import axios from 'axios';

import {  Redirect } from "react-router-dom";

const Form = () => {
    const [image, setImage] = useState("");
    const [text, setText] = useState("");

    const onInputChange = (e) =>{
        console.log("e.target: ", e.target.files)
        if(e.target?.files?.length > 0){

            setImage(e.target.files[0])
        }
        
        setText(e.target.value)
    }


    const onFormSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("text", text);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.post("http://localhost:3001/posts/new", formData, config)
            .then((res)=>{
                console.log("Success", res);
            
            }).catch((err)=>{
                console.log("err", err)
            })
            
        window.location.replace('http://localhost:3000');
    }
    
        return(
            <div className='formWrapper'> 
            <div className='form'>
                
                <form onSubmit={onFormSubmit}>
                    
                    <h1>Post your art here (Suggested 480x480px)</h1>
                    <input type="file" name="image" onChange={onInputChange}/>
                    <input type="text" name="text" onChange={onInputChange}/>
                    
                    <button type='submit'>upload</button>
                     
                </form>
            </div>
            </div>
        );
}

export default Form