import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function WriteReviews(props) {
  const [reviewer, setReviewer] = useState("");
  const [review, setReview] = useState("");

  function saveNewReview() {

    let data = { reviewer, review }
    fetch(`http://localhost:3000/hostels/review/${props.id}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)

    }).then((response) => {
      response.json().then((result) => {
        console.warn("result", result)
      })
      window.location.reload(false)
    })
  }
  return (
    <div className="newReview">
      <h3>Write a review on this hostel</h3>
      <TextField id="outlined-name" label="Name" value={reviewer} onChange={(e) => setReviewer(e.target.value)}
      />
      <br /> 
      <br />
      <TextField id="textarea-review" label="Review" placeholder="Write Review" multiline value={review} onChange={(e) => setReview(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained"onClick={saveNewReview} >Leave a Review!</Button>
    </div>
  );
}
export default WriteReviews;