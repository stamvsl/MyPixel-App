import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Form from "./form"

const Feed = () => {
    
const [data, setData] = useState(null)
useEffect(() => {
    axios.get("http://localhost:3001/allPosts")
        .then((res)=> res.data)
        .then((posts)=>{
            console.log("posts: ", posts)
            setData(posts)
        })
        .catch((e)=> console.log("error",e))
  },[]);

    return(
        <div>
            <h1>Feed</h1>
            <Link to = "/form">
                        <button>add post</button>
                        
            </Link>
            <div>
                {data && data.map((val)=> 
                <div key={val._id}>
                   <div> <img alt = "image" src={val?.image }/> </div>
                   <div> {val?.text} </div>
                </div>) }
            </div>
            
            
        </div>
    )

    

}
export default Feed;