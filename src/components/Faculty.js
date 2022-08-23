import React from 'react'
import harikiran from './images/harikiran.jpg'
import muralimohan from './images/muralimohan.jpg'
import krsp from './images/krsp.jpg'
import Grid from '@mui/material/Grid'
import CardLayout from './CardLayout'
function Faculty() {
  



  return (
    
        
    <Grid container spacing={10}>
    <Grid item>
      <CardLayout poster={harikiran} type="Faculty Name" name="Dr.Hari Kiran" total ="ID" ftotal="6520" boo="NBA"nba='YES'/>
    </Grid>
    <Grid item>
    <CardLayout poster={krsp} type="Faculty Name" name="DR.KRSP" total ="ID" ftotal="152" boo="4582"nba='YES'/>
    </Grid>
    <Grid item>
    <CardLayout poster={muralimohan} type="Faculty Name" name="Dr.Murali Mohan" total ="ID" ftotal="3258" boo="NBA"nba='true'/>
    </Grid>

  </Grid>
     
    
    
  );
}

export default Faculty