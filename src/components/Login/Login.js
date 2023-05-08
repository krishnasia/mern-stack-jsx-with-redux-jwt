import React from 'react';
import './LoginStyle.css';
import lmspic1 from '../../images/lmspic1.jpg';
import { styled } from '@mui/material/styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import {Input,Button,Box,Link} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { useStyles } from './LoginStyle';
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  width: '264px',
  padding: theme.spacing(1),
  fontSize: '15px',
  color: '#b12922'//#87110a
}));
function Login() {
  const classes = useStyles();
  return (
    <div className='container'>
        <div className='tag'>
            < Div>Library Management System</Div>
            <form  id="demo">
                <Input sx={{color:'white'}} disableUnderline className={classes.inputField} placeholder='Username' type='text'
                startAdornment={
                  <InputAdornment position="start" sx={{color:'white'}}>
                    <AccountBoxIcon/>  
                </InputAdornment>
                }
                /><br/>
                <Input sx={{color:'white'}} disableUnderline className={classes.inputField} placeholder='Password' type='password'
                startAdornment={
                  <InputAdornment position="start" sx={{color:'white'}}>
                    <VpnKeySharpIcon/>  
                </InputAdornment>
                }
                /><br/>
                <Button sx={{backgroundColor:'rgb(231 160 141)',marginTop:'10px','&:hover':{backgroundColor:'rgb(159 126 118)'}}} type="submit" fullWidth variant='contained' size='medium' endIcon={<LoginSharpIcon />}
                >Log In</Button><br/>
                
            </form>
            <Box
                    sx={{
                      mt:'7px',
                      display:'flex',
                      justifyContent:'center',
                      alignContent:'center',
                      cursor:'pointer !important'
                    }}
                    onClick={(e)=>{
                      e.preventDefault();
                      console.log("link clicked");
                    }}
                  >
                    <Link sx={{color:'white'}} underline="hover" >
                      {'New User?'}
                    </Link>
                  </Box>
        </div>
        <img src={lmspic1} width="100%" height="600px" />
    </div>
  )
}

export default Login