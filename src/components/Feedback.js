import React from 'react'
import { Grid, Avatar, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Radio, FormLabel, RadioGroup, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import axios from 'axios';
function Feedback() {

  const url = "http://localhost:3000/feedback"
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const age = e.target.age.value
    const gender = e.target.gender.value
    const user = e.target.user.value
    const address = e.target.address.value
    const comment = e.target.comment.value
    const vacinated = e.target.vacinated.value
    axios.post(url, {
      name,
      user,
      age,
      gender,
      phone,
      email,
      address,
      vacinated,
      comment
    })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });

  }
  const avatarStyle = { backgroundColor: 'violet' }
  return (
    <Grid>
      <Paper elevation={24} style={{ padding: 20, width: '65vh', margin: "20px auto", borderRadius: "4%", background: 'linear-gradient(to top, rgba(168, 237, 234, 0.45), rgba(254, 214, 227, 0.45))' }}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><InsertEmoticonIcon></InsertEmoticonIcon></Avatar>
          <h2 style={{ margin: 0 }}>Feedback</h2><br></br>
        </Grid>
        <Grid style={{ marginTop: 0 }}>
        </Grid>
        <form onSubmit={submitHandler}>
          <TextField id='name' label='Name' placeholder="Enter your name" style={{ width: '33vh', marginRight: 3 }} />
          <TextField id='phone' label='Phone' placeholder="Enter your phone number" style={{ marginTop: 0.5, width: "31.5vh" }} />
          <TextField id='email' label='Email' placeholder="Enter your email" style={{ marginTop: 5, marginTop: 10, width: "33vh" }} />

          <FormControl id='gender' component="fieldset" style={{ marginTop: 5, marginLeft: 20 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

          </FormControl>
          <FormControl id='user' component="fieldset" style={{ marginTop: 5, marginLeft: 20 }}>
            <FormLabel component="legend">User</FormLabel>
            <RadioGroup aria-label="user" name="user" style={{ display: 'initial' }}>
              <FormControlLabel value="Student" control={<Radio />} label="Student" />
              <FormControlLabel value="Faculty" control={<Radio />} label="Faculty" />
              <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
            </RadioGroup>
          </FormControl>

          <TextField id='age' label="Age" type="text" placeholder=" Age" style={{ marginTop: 15, width: "18vh" }} />

          <FormControl id='vacinated' component="fieldset" style={{ marginTop: 5, marginLeft: 20 }}>
            <FormLabel component="legend">Vacinated</FormLabel>
            <RadioGroup aria-label="vacinated" name="vacinated" style={{ display: 'initial' }}>
              <FormControlLabel value="0 Doses" control={<Radio />} label="0 Doses" />
              <FormControlLabel value="1 Dose" control={<Radio />} label="1 Dose" />
              <FormControlLabel value="More than 2 Doses" control={<Radio />} label="More than 2 Doses" />
            </RadioGroup>
          </FormControl>

          <TextField id='address' label="Address" multiline rows={2} placeholder="Enter Your Current Address" style={{ width: "64vh" }} />
          {/*} <FormControl sx={{ marginTop: 1.2, minWidth: 190, marginLeft: 0., }}>
            <InputLabel id='user' size='medium'>User</InputLabel>
            <Select
              value={dept}
              label="Course"
              onChange={handleChange}
              
              style={{ marginLeft: 2 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Faculty</MenuItem>
              <MenuItem value={20}>Student</MenuItem>
              <MenuItem value={30}>Employee</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: 1.2, minWidth: 200, marginLeft: 0.5 }}>
            <InputLabel id='vacinated' size='medium'>Vacinated</InputLabel>
            <Select
              
              label="Vacinated"
              
              style={{ marginLeft: 0 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>0 Doses</MenuItem>
              <MenuItem value={20}>1 Dose</MenuItem>
              <MenuItem value={30}>More Than2 Doses</MenuItem>
            </Select>
  </FormControl>*/}
          <TextField id='comment' label="Comment" multiline rows={3} placeholder="Any complexity observed during or after effect of COVID-19" style={{ marginTop: 9, width: "64vh" }} />

          <div>
            <Button type='submit' variant='contained' style={{ marginBottom: 10, marginTop: 5, padding: 12, background: 'linear-gradient(to right, rgba(55, 236, 186, 0.5), rgba(114, 175, 211, 0.5)' }} fullWidth > Submit</Button>
          </div>

        </form>

      </Paper>
    </Grid>
  );
}
export default Feedback