import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const Signup = () => {
    const chubbyStyles = useGradientBtnStyles({ chubby: true });
    const styles = useRoundInputBaseStyles();
    const paperStyle={padding :50,height:'65vh',width:430, margin:"100px auto",borderRadius:"65px" } 
    const headerStyle = { margin: 0 }
    const avatarStyle={backgroundColor:'#242323',padding:20,background: ' linear-gradient(68deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)'}
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
          <Paper  elevation={24} style={paperStyle} sx={{borderRadius:20}}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}sx={{fontSize : 40}}></Avatar>
                       
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <br></br>
                <InputBase style={{padding :6}} classes={styles} placeholder={'Enter  Name'}fullWidth required />
      <Box pb={1} /><br></br>
      <InputBase style={{padding :6}} classes={styles} placeholder={'Enter your Email'}fullWidth required />
      <Box pb={1} /><br></br>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Others" control={<Radio />} label="Others" />
                        </RadioGroup>
                    </FormControl>
                    <InputBase style={{padding :6}} classes={styles} placeholder={'Phone Number'}fullWidth required />
      <Box pb={1} /><br></br>
      <InputBase style={{padding :6}} classes={styles} placeholder={'Password'}fullWidth required />
      <Box pb={1} /><br></br>
      <InputBase style={{padding :6}} classes={styles} placeholder={'Confirm Password'}fullWidth required />
      <Box pb={1} /><br></br>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    /><br></br>
                    <Button style={{padding :12,background: 'linear-gradient(68deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%'}}type='submit' color='primary' variant="contained" classes={chubbyStyles} fullWidth>Sign up </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;