import React, { useState } from "react";
import WriteReviews from "../Reviews/WriteReview";
import Button from '@mui/material/Button';
   
export const Hostel = (props) => {


    //console.log(props);
    const [showForm, setShowForm] = useState(false);
    const hostel = props.hostel;

    return (
        <li>
            <h2>{hostel.name}</h2>
            {/* <p>{hostel.id}</p> */}
            <h3>{hostel.description}</h3>
            <h4>{hostel.address}</h4>
            <h4>{hostel.postcode}</h4>
            <h4>{hostel.email}</h4>
            <h5>{hostel.reviews.map((reviews, index) => {
              return (<div key={index+1}>{reviews.reviewer + ": " + reviews.review}</div>)})}
            </h5>
              {hostel.ratings.map((ratings, index) => {
                const avgRating =
                hostel.ratings.reduce((sum, curr) => sum + Number(curr), 0) /
                hostel.ratings.length;

                return (
                  <div key={index}>
                    <h4>This hostel has an Average Rating of: {avgRating}</h4>
                  </div> 
                )
              })}
            <h4>
              This hostel has {hostel.ratings.length} Overall Ratings
            </h4>
            <div className="button-reviews">
              <Button onClick={()=> {setShowForm(!showForm)}}>{showForm?"Hide":"Write"} Review</Button>
            </div>
            
            {showForm?< WriteReviews id={hostel.id} />:null}
        </li>
    )
}
