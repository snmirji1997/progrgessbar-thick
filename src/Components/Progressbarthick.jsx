import React from 'react'

import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1e3867' : '#1e3867',
  },
}));


const Progressbarthick = () => {
   
   
  return (
 
   
        <BorderLinearProgress variant="determinate" value={50} />
       
        
      
     

   
  )
}

export default Progressbarthick