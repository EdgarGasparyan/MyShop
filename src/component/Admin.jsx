import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Admin = () => {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then(() => {
		alert('successful insert')
	 });
  };

  return (
    <>
      <div>
        <h1> Admin</h1>
      </div>

      <div>
        <div>
          <label>Move Name:</label>
          <input
            type="text"
            name="movieName"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Review</label>
          <input
            type="text"
            name="review"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={submitReview}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Admin;
