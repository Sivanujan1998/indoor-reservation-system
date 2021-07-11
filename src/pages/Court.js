import React,{useState,useEffect,useContext} from 'react'
import "../Style/court.css"
import useBadmintoncourt from '../components/Hooks/useBadmintoncourt';
import DateTimePicker from 'react-datetime-picker';
import badmintoncourtservice from "../Services/badmintoncourtservice"
import Footer from '../components/Footer';
import {BrowserRouter as Router, Route, Link,Switch,Redirect, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Review from './Review';
import Blog from './Blog';
import { loginstateglobal } from '../App';

import Paypal from "../components/Paypal"
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Court() {
  const loginContext=useContext(loginstateglobal)
  var currentDate = new Date()
  var maximumDate=new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  maximumDate.setDate(currentDate.getDate()+31);
  const[datetimevalue,onChange]=useState(currentDate);
  const[courtname,bindcourt]=useBadmintoncourt('')

const[checkout,setcheckout]=useState(false);
var email=loginContext.user.email
  var day=String(datetimevalue.getDate())
  var month=String(datetimevalue.getMonth()+1)
  var year=String(datetimevalue.getFullYear())
  var date=day+"/"+ month +"/"+year
  var hour=String(datetimevalue.getHours())
  var min="00"

  var time=hour+min

  let badmintoncourt={date,email,courtname,time}


useEffect(()=>{
  var alldate=[]
  var alltime=[]
  var allcourtnames=[]
  var radio=[]
  badmintoncourtservice.getcourt().
  then( 
     r=>{
     for (var i = 0; i < r.data.length; i++) 
     {
         alldate.push(r.data[i].date)
         alltime.push(r.data[i].time)
         allcourtnames.push(r.data[i].courtname)
     }
     for(var j=0;j<r.data.length;j++){
         if(date===alldate[j] && time===alltime[j] )
         {
          radio.push(allcourtnames[j])
        }
     }

     var inputs = document.querySelectorAll('input[type="radio"]');
     for(var k=0;k<inputs.length;k++){
        radio.includes(inputs[k].value)?
        inputs[k].disabled=true:inputs[k].disabled=false
     }
     
  
  }
     )
.catch(er=>alert(er))
},);

    
    const submithandler=e=>{
      e.preventDefault();
     


       
    }

    
   
 

    return (
     <div className="full">

<form onSubmit={submithandler}>
        <div className="court">


<div>

      <center><DateTimePicker
      
        onChange={onChange}
        value={datetimevalue}
        numberOfMonths= "3"
        minDate={currentDate}
        maxDate={maximumDate}
        format="dd/MM/yyyy HH:00"
        
      /></center>

    </div>      <div class="custom-select">


                </div>

            <div className="courta">
            <div className="squrea1"><input type="radio" id="a1" class="checkbox" name="test" {...bindcourt} value="courta1" /> <h1>Single court A-1 Side</h1></div>
            <div className="squrea2"><input type="radio" id="a1" class="checkbox" name="test" {...bindcourt} value="courta2" /><h1>Single court A-2 Side</h1></div>
            </div>
            

            <div className="courtb">
            <div className="squreb1"><input type="radio" id="b1" class="checkbox" name="test" {...bindcourt} value="courtb1" /><h1>Single court B-1 Side</h1></div>
            <div className="squreb2"><input type="radio" id="b2" class="checkbox" name="test" {...bindcourt} value="courtb2" /><h1>Single court B-2 Side</h1></div>
            </div>
     
        
            <div className="courtc">
            <div className="courtca">
            <div className="squrec1"><input type="radio" id="c1" class="checkbox" name="test" {...bindcourt} value="courtc1" /><h1>Double court C-1 Side</h1></div>
            <div className="squrec2"><input type="radio" id="c2" class="checkbox" name="test" {...bindcourt} value="courtc2" /><h1>Double court C-2 Side</h1></div>
            </div>
            <div className="courtcb">
            <div className="squrec3"><input type="radio" id="c3" class="checkbox" name="test" {...bindcourt} value="courtc3" /><h1>Double court C-3 Side</h1></div>
            <div className="squrec4"><input type="radio" id="c4" class="checkbox" name="test" {...bindcourt} value="courtc4" /><h1>Double court C-4 Side</h1></div>
            </div>
            </div>
            <div className="courtd">
            <div className="courtda">
            <div className="squred1"><input type="radio" id="d1" class="checkbox" name="test" {...bindcourt} value="courtd1" /><h1>Double court D-1 Side</h1></div>
            <div className="squred2"><input type="radio" id="d2" class="checkbox" name="test" {...bindcourt} value="courtd2" /><h1>Double court D-2 Side</h1></div>
            </div>
            <div className="courtdb">
            <div className="squred3"><input type="radio" id="d3"  class="checkbox" name="test" {...bindcourt} value="courtd3" /><h1>Double court D-3 Side</h1></div>
            <div className="squred4"><input type="radio" id="d4" class="checkbox" name="test" {...bindcourt} value="courtd4" /><h1>Double court D-4 Side</h1></div>
            </div>
            </div>
         
           
        </div> 
        <center className="pay">
        {checkout?(
 <div className="paypal"><br/><Paypal courtname={courtname}/></div>
       
       ):(
         <button type='submit' className="acc-btn"  variant='contained' color='primary'
         onClick={()=>{
         
       
          badmintoncourtservice.courtbook(badmintoncourt).then(
            NotificationManager.success('Booked your Court', 'Sucessfully')
 ).catch(er=>alert(er))
          

           setcheckout(true);
         }}>BOOK NOW</button>


       )}</center>
            
            </form><NotificationContainer/>
        </div>
    
    )
    
}

export default Court