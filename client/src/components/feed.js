import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Form from "./form"
import Header from './header';
import Footer from './footer';
import "./feed.css"

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




    // const removePost= (id) =>{

    //     axios.delete('https//localhost:3001/posts/${id}')
    //     setData(
    //     data.filter((post)=>{
    //         return post.id !== id;
    //     })
    // ) } 


 
  
    
  


    return(
        <div>
            <Header />
            <div className='container'>
                <div className='feed'>
                    <h1>Feed</h1>
                    <Link to = "/form">
                                <button>add post</button>
                    </Link>
                    <br /><br /><br />
                        <div>
                            {data && data.map((val)=> 
                            <div key={val._id}>
                                <div> {val?.text} </div>
                                <div> <img alt = "image" src={val?.image }/> </div>
                                {/* <button onClick={removePost(val.id)}> Remove this post</button> */}
                            </div>) }
                        </div>
                </div>
            </div>
            <Footer />
            
            
        </div>
    )

    

}
export default Feed;