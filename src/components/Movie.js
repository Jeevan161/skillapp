import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
function Movie(props) {
  return (
    <Card  variant='outlined' style={{marginTop:10,height:370,width:200}} >
      <CardActionArea component="img" href={props.link}>
        <CardMedia
          component="img"
          image={props.poster}
          height={285}
          style={{paddingBottom:15}}
        />
          <CardContent>
            <div style={{marginTop:-40}}>
              <h4>
              Anime : {props.name}<br></br>
              Rating : {props.rat}<br></br>
              Genres : {props.gen}<br></br>
              </h4>
            </div>
          </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Movie;