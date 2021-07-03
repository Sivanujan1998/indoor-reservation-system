import React,{useContext} from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import usePlayerInput from './Hooks/usePlayerinput';
import Playerservice from '../Services/Playerservice';
import { loginstateglobal } from '../App';

const Login=({handleChange})=>{
    const loginContext=useContext(loginstateglobal)
    

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    const[email,bindemail,resetemail]=usePlayerInput('')
    const[password,bindpassword,resetpassword]=usePlayerInput('')
    

    const submithandler=e=>{
        e.preventDefault();

        let allplayers=[]
        let allemails=[]
        Playerservice.getplayers().
        then( 
           r=>{
           for (var i = 0; i < r.data.length; i++) 
           {
               allplayers.push(r.data[i])
               allemails.push(r.data[i].email)
              
           }
           for(var j=0;j<r.data.length;j++){
              if(!allemails.includes(email)){
                alert("usename not found")
                break
              }
               if(email===allplayers[j].email && password===allplayers[j].password)
               {

                   
                   
                   alert("loged in sucessful")
                   
                   loginContext.setuser(allplayers[j])
                    loginContext.setlogin(true)
                
                   
                
               }
           }
        
        }
           )
   .catch()

       
      
   
    }
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={submithandler}>
                <TextField label='Email' placeholder='Enter your Email Address' {...bindemail} fullWidth required/>
                <TextField label='Password' placeholder='Enter Your password' type='password' {...bindpassword} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                     
                    />
                    }
                    label="Remember me"
                 />
                 
                <Button type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login