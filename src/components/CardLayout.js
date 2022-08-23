import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia,Button } from '@mui/material'

function CardLayout(props) {
  return (
    <div> <Card sx={{position: 'relative',left: 100,top:50 }} variant='outlined' style={{marginTop:10,height:600,width:420,borderRadius:"20px"}}  >
    <CardActionArea  >
      <CardMedia 
        component ="img"
        image={props.poster}
        height={410
        }
      
      />
        <CardContent>
          <div style={{marginTop:15}}>
            <h2>
                <center>
            {props.type} : {props.name}<br></br>
            {props.total}: {props.ftotal}<br></br>
            {props.boo}  : {props.nba}<br></br><br></br>
            <Button variant="contained"sx={{background: 'linear-gradient(68deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}} disableElevation>
  Click Here
</Button>
            </center>
          
            </h2>
          </div>
        </CardContent>
    </CardActionArea>
  </Card></div>
  )
}

export default CardLayout