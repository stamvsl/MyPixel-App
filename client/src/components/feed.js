import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Form from "./form"
import Header from './header';
import Footer from './footer';
import "./feed.css"

const Feed = () => {

// const {id} = useParams
    
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


  const removePost = (id) =>{
    axios.delete(`http://localhost:3001/posts/delete/${id}`)
        // .then(res =>{
        //     console.log(res.data);
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
  }

   

// const removePost= async(id) =>{
//     const response =await axios.delete(`http://localhost:3001/posts/delete/${id}`)
//     if(response.data.data){
//         setData(response.data.data)
//     }
// } 



    return(
        <div>
            <Header />
            <div className='container'>
                <div className='feed'>
                    <div className='feedTop'>
                        
                        <img src='../images/usam.png' />
                        <h2>WE WANT YOUR ART</h2>
                        <Link to = "/form">
                                <button>Post here</button>
                    </Link>
                       
                    </div>
                   
                    <br /><br /><br />
                        <div>
                            {data && data.map((val)=> 
                            <div key={val._id} className = "post">
                                <div> {val?.text} </div>
                                <div> <img src={val?.image }/> </div>
                                <button onClick={()=>removePost(val._id)}> Remove this post</button>
                            </div>) }
                        </div>
                </div>
            </div>
            <Footer />
            
            
        </div>
    )

    

}
export default Feed;