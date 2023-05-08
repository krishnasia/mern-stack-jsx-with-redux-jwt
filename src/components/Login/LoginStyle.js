import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { border } from '@mui/system';


export const useStyles =  makeStyles((theme) =>({
    inputField:{
        border: '1px solid #ffffff',
        width: '31.5ch',
        marginTop: '3px',
        padding : '2px 10px',
        borderRadius:1
        }
        ,
    // loginButton:{
    //     marginTop:'10px',
    //     '& .MuiButtonBase-root.css-1qelgoy':{
    //         backgroundColor:'rgb(231 160 141)',
    //         marginTop:'10px',
    //         '&:hover':{backgroundColor:'rgb(159 126 118)'}
    //     }
        
    // }
}))