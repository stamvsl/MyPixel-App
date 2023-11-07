import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "./form";
import Header from "./header";
import Footer from "./footer";
import "./feed.css";

const Feed = () => {
  console.log(process.env.NODE_ENV);
  // const {id} = useParams
  const path =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${path}/allPosts`)
      .then((res) => res.data)
      .then((posts) => {
        console.log("posts: ", posts);
        setData(posts);
      })
      .catch((e) => console.log("error", e));
  }, []);

  const removePost = (id) => {
    console.log("path ", path);
    axios
      .delete(`${path}/posts/delete/${id}`)
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
    const window_path =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.REACT_APP_BASE_PATH;
    window.location.replace(window_path);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="feed">
          <div className="feedTop">
            <img src="../images/usam.png" />
            <h2>WE WANT YOUR ART</h2>
            <Link to="/form">
              <button>Post here</button>
            </Link>
          </div>

          <br />
          <br />
          <br />
          <div>
            {data &&
              data.map((val) => (
                <div key={val._id} className="post">
                  <div> {val?.text} </div>
                  <div>
                    {" "}
                    <img src={val?.image} />{" "}
                  </div>
                  <button onClick={() => removePost(val._id)}>
                    {" "}
                    Remove this post
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Feed;
