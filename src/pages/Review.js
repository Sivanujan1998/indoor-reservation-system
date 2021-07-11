import React, { useState,useEffect ,useContext} from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../Style/RatingStyles";
import { loginstateglobal } from "../App";
import Frame, { useFrame } from 'react-frame-component';
import Feedback from "../components/Feedback"
import useReview from "../components/Hooks/useReview";
import Reviewservice from "../Services/Reviewservice";
import "../Style/Review.css"
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 

const Review = () => {
  const[comment,bindcomment,resetcomment]=useReview('');
  const loginContext=useContext(loginstateglobal)
  const [rate, setRate] = useState(0);
 
 


const submithandler=(e)=>{
  e.preventDefault();

  var name=loginContext.user.name


  var review={comment,name,rate}
  Reviewservice.createreview(review).then(
    NotificationManager.success('Review Added', 'Sucessfully!'),
 setRate(0),
resetcomment(),

  ).catch(er=>alert(er))
  }




  return (<>
   
    <div className="reviewintro"><h1>Rate our service here...</h1>
    <Container className="startintro">
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                 
                  setRate(givenRating)
                  NotificationManager.info(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "#FFD700"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}

    </Container></div>
    <div className="commentbox">
    <form onSubmit={submithandler}>
    <div>
    <center><textarea className="textarea" rows='6' placeholder="write your Feedback Here.." {...bindcomment}  required></textarea></center>
    <center><input type="submit"  className="submit"/></center><br/>
    </div>
  </form>
  </div>

  <Frame className='feedback' >
    <Feedback value={comment} />
  </Frame>
  <NotificationContainer/>
  </>
  )
  
  
};
  
export default Review;