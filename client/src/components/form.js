import React, { useState } from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";

const Form = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    if (e.target?.files?.length > 0) {
      setImage(e.target.files[0]);
    }

    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("text", text);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const path =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : process.env.REACT_APP_BACKEND_URL;
    axios
      .post(`${path}/posts/new`, formData, config)
      .then((res) => {
        console.log("Success", res);
        const window_path =
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.REACT_APP_BASE_PATH;
        window.location.replace(window_path);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="formWrapper">
      <div className="form">
        <form onSubmit={onFormSubmit}>
          <h1>Post your art here (Suggested 480x480px)</h1>
          <input type="file" name="image" onChange={onInputChange} />
          <input type="text" name="text" onChange={onInputChange} />

          <button type="submit">upload</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
