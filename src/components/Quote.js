import React   from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios'
function Quote() {
    const [quote,setQuote]=useState('')
    const getQuote=()=>{
        axios.get('https://api.quotable.io/random')
        .then(res=>{
           setQuote(res.data.content)
        }).catch(err=>{
           console.log(err)
        })
    }
  return (
    <div>
      <center >
        <Button sx={{margin:"100px auto"}} variant="contained"
        color = "secondary"
        onClick={getQuote}>Genrate Quote</Button>
        <p>{quote}</p>
        </center>

    </div>
  )
}

export default Quote