import React,{useState,useContext} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import usePlayerInput from './Hooks/usePlayerinput';
import Playerservice from '../Services/Playerservice';
import { loginstateglobal } from '../App';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Signup=()=>{
    const loginContext=useContext(loginstateglobal)
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const[name,bindname,resetname]=usePlayerInput('')
    const[email,bindemail,resetemail]=usePlayerInput('')
    const[phonenumber,bindphonenumber,resetphonenumber]=usePlayerInput('')
    const[gender,bindgender,resetgender]=usePlayerInput('')
    const[password,bindpassword,resetpassword]=usePlayerInput('')
    const[password2,bindpassword2,resetpassword2]=usePlayerInput('')


    const submithandler=e=>{
        e.preventDefault()
        if(password===password2){
const allemails=[]

        Playerservice.getplayers().
        then( 
           r=>{
           for (var i = 0; i < r.data.length; i++) 
           {
               allemails.push(r.data[i].email)
              
           }
           for(var j=0;j<r.data.length;j++){
              if(allemails.includes(email)){
                NotificationManager.error('This Email address Already added', 'Try Again!', 1000, () => {});
                break
              }else{
                let player={email,gender,name,password,phonenumber}
                Playerservice.createplayer(player).then(
                 loginContext.setpopup(false), 
             
                  alert("Account Sucessfully created!! "),
                ).catch(er=>alert(er))
                break
              } 
           }
        }
           )
   .catch(er=>NotificationManager.error(er, 'Try Again!', 1000, () => {})) 
    }else{ NotificationManager.error('Passwords', 'Try Again!', 1000, () => {});}}
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={submithandler}>
                    <TextField fullWidth label='Name'  placeholder="Enter your name" {...bindname}  required/>
                    <TextField fullWidth label='Email'  placeholder="Enter your email"{...bindemail} required />
                    <FormControl component="fieldset" style={marginTop}>

                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender"  style={{ display: 'initial' }} {...bindgender}>
                            <FormControlLabel value="female"  control={<Radio  required />} label="Female" />
                            <FormControlLabel value="male"  control={<Radio required/>} label="Male" />
                        </RadioGroup>
                    </FormControl>

                    
                    <TextField fullWidth label='Phone Number'  placeholder="Enter your phone number"  {...bindphonenumber}required/>
                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password" {...bindpassword}required/>
                    <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" {...bindpassword2} required/>
                    <FormControlLabel 
                        control={<Checkbox name="checkedA" required/>}
                        label="I accept the terms and conditions."
                    />
                   
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper><NotificationContainer/>
        </Grid>
    )
}


export default Signup

