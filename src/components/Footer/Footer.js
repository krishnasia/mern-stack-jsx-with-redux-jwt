import React from 'react'
import './footer.css'
import { styled } from '@mui/material/styles';

const Box = styled('div')(({ theme }) => ({
  background: 'rgb(54 67 82)',//334b58 rgb(53 71 92)
  color:'#b4e910',//#b4e910
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height:'40px',
  opacity: '0.97'
}));

export const Footer = () => {
  return (
    <Box>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            @2023 All Rightd Reserved
        </div>
    </Box>
  )
}
