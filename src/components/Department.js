import React from 'react'
import Faculty from './Faculty'
import CardLayout from './CardLayout'

import cse from './images/cse.jpg'
import ece from './images/ece.jpg'
import m from './images/m.jpg'
import Grid from '@mui/material/Grid'


function Department(props) {
 
  return (
    <Grid container spacing={10}>
          <Grid item>
            <CardLayout poster={cse} type="Department" name="CSE" total ="Total Faculty" ftotal="252" boo="NBA"nba='true'/>
          </Grid>
          <Grid item>
          <CardLayout poster={ece} type="Department" name="ECE" total ="Total Faculty" ftotal="152" boo="NBA"nba='true'/>
          </Grid>
          <Grid item>
          <CardLayout poster={m} type="Department" name="MECH" total ="Total Faculty" ftotal="102" boo="NBA"nba='true'/>
          </Grid>

        </Grid>
  );
  }

export default Department