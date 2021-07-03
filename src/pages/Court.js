import React,{useState} from 'react'
import "../Style/court.css"
import useBadmintoncourt from '../components/Hooks/useBadmintoncourt';
import DateTimePicker from 'react-datetime-picker';
import badmintoncourtservice from "../Services/badmintoncourtservice"
import Footer from '../components/Footer';
function Court() {
    var currentDate = new Date()
    var maximumDate=new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    maximumDate.setDate(currentDate.getDate()+31);
    const[datetimevalue,onChange]=useState(currentDate);
const[courtname,bindcourt]=useBadmintoncourt('')
  



    var email="ssivanujan1998@gmail.com"
    const submithandler=e=>{
        e.preventDefault();
      var day=String(datetimevalue.getDate())
        var month=String(datetimevalue.getMonth()+1)
        var year=String(datetimevalue.getFullYear())
        var date=day+"/"+ month +"/"+year
        var hour=String(datetimevalue.getHours())
        var min="00"
     
        var time=hour+min
   
        let badmintoncourt={date,email,courtname,time}
        badmintoncourtservice.courtbook(badmintoncourt).then(alert("Account Sucessfully created!! ")).catch(er=>alert(er))
        alert(courtname)


    }

    
   
 

    return (
     
        <div className="court">
<form onSubmit={submithandler}>
<div>

      <DateTimePicker
      
        onChange={onChange}
        value={datetimevalue}
        numberOfMonths= "3"
        minDate={currentDate}
        maxDate={maximumDate}
        format="dd/MM/yyyy HH:00"
        
      />

    </div>      <div class="custom-select">


                </div>

            <div className="courta">
            <div className="squrea1"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courta1" /> <h1>Single court A-1 Side</h1></div>
            <div className="squrea2"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courta2" /><h1>Single court A-2 Side</h1></div>
            </div>
            

            <div className="courtb">
            <div className="squreb1"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtb1" /><h1>Single court B-1 Side</h1></div>
            <div className="squreb2"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtb2" /><h1>Single court B-2 Side</h1></div>
            </div>
     
        
            <div className="courtc">
            <div className="courtca">
            <div className="squrec1"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtc1" /><h1>Double court C-1 Side</h1></div>
            <div className="squrec2"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtc2" /><h1>Double court C-2 Side</h1></div>
            </div>
            <div className="courtcb">
            <div className="squrec3"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtc3" /><h1>Double court C-3 Side</h1></div>
            <div className="squrec4"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtc4" /><h1>Double court C-4 Side</h1></div>
            </div>
            </div>
            <div className="courtd">
            <div className="courtda">
            <div className="squred1"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtd1" /><h1>Double court D-1 Side</h1></div>
            <div className="squred2"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtd2" /><h1>Double court D-2 Side</h1></div>
            </div>
            <div className="courtdb">
            <div className="squred3"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtd3" /><h1>Double court D-3 Side</h1></div>
            <div className="squred4"><input type="radio" class="checkbox" name="test" {...bindcourt} value="courtd4" /><h1>Double court D-4 Side</h1></div>
            </div>
            </div>
            <button className="acc-btn" type='submit' variant='contained' color='primary'>BOOK NOW</button>
            </form>
            <Footer/>
        </div>
    )
    
}

export default Court