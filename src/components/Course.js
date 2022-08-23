import React from 'react'
import iot from './images/iot.jpg'
import ai from './images/ai.jpg'
import cloud from './images/cloud.jpg'
import Grid from '@mui/material/Grid'
import CardLayout from './CardLayout'

function Course() {

  return (
    <Grid container spacing={10}>
    <Grid item>
      <CardLayout poster={cloud} type="Course Name" name="Cloud" total ="Total Faculty" ftotal="252" boo="NBA"nba='True'/>
    </Grid>
    <Grid item>
    <CardLayout poster={iot} type="Course Name" name="IOT" total ="Total Faculty" ftotal="152" boo="NBA"nba='True'/>
    </Grid>
    <Grid item>
    <CardLayout poster={ai} type="Course Name" name="AI" total ="Total Faculty" ftotal="102" boo="NBA"nba='True'/>
    </Grid>

  </Grid>
  )
}

export default Course