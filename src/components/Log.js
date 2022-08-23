import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';
import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';

import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { BorderAllRounded } from '@material-ui/icons';
import { borderRadius } from '@mui/system';
const Log=()=>{
    
    const styles = useRoundInputBaseStyles();
    const neonStyles = useNeonCheckboxStyles();
    const paperStyle={padding :50,height:'50vh',width:430, margin:"200px auto",borderRadius:"65px" ,background:'linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.5))'} 
    const avatarStyle={backgroundColor:'#242323',padding:50,background: ' linear-gradient(68deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)'}
    const btnstyle={margin:'8px 0'}
    
     
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  
    return(
        
        <Grid>
            <Paper  elevation={24} style={paperStyle} sx={{borderRadius:20}}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}sx={{fontSize : 40}}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <InputBase style={{padding :6,fontSize:"20px"}} classes={styles}  placeholder={' Enter User Name'} fullWidth required />
      <Box pb={1} /><br></br>
      <InputBase  style={{padding :6,fontSize:"20px"}} classes={styles} type="password" placeholder={' Enter Password'} sx={{fontSize:"20px"}} fullWidth required />
      <Box pb={1} />
      <br></br>
      <FormControlLabel
        control={
          <Checkbox style={{padding :10}}
            disableRipple
            classes={neonStyles}
            checkedIcon={<span />}
            icon={<span />}
          />
        }
        label={'Remember Me'}
      />
      <br></br>
      
      
                <Button style={{padding :12,background: 'linear-gradient(68deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%'}}type='submit' color='primary' variant="contained" classes={chubbyStyles} fullWidth>Sign in </Button>
                
                <Typography >
                <br></br>
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
            
        </Grid>
        
    )
}

export default Log