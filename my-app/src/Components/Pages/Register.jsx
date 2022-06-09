import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import { Container,Grid,OutlinedInput,Typography , Button} from '@mui/material';
import {  IconButton, Snackbar } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { Box, FormHelperText, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { makeRegisterRequest } from '../../Redux/Register/actions';
import MyAppbar from '../Layout/appbar/MyAppbar';



const GreenCheckbox = ((props) => <Checkbox color="default" {...props} />);

export function Register() {
    const isAuth = useSelector(state=>state.login.isAuth)


    const[name,setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    
    // const {success,isError,errorMsg} = useSelector(state=>state.register)

    const onNameChange = (e) =>{
        setName(e.target.value);
    }
    
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeRegisterRequest({name,email,password}))
        
    }


    return !isAuth ?
    <Container className = "container" maxWidth = "xl">
        <Box className = "boxImg">
            <MyAppbar/>
        </Box>
        <Box className = "boxForm">
            <Grid container spacing = {3} >
                <Grid item>
                    <Typography className = "h5" variant = "h5">Create an Account (it's free)</Typography>
                </Grid>

                <Grid item>
                    <form onSubmit = { handleSubmit }>
                    <FormHelperText className = "formhelperText">Name</FormHelperText>
                        <OutlinedInput  className = "outlinedInput" onChange = { onNameChange } value = { name } required type = "text" variant="outlined"/>
                        <FormHelperText className = "formhelperText">Email Address</FormHelperText>
                        <OutlinedInput  className = "outlinedInput" onChange = { onEmailChange } value = { email } required type = "text" variant="outlined"/>
                        <FormHelperText className = "formhelperText">Password</FormHelperText>
                        <OutlinedInput  className = "outlinedInput" onChange = { onPasswordChange } value = { password } required type = "password" variant="outlined"/>
                        {/* <FormControlLabel className = "checkbox"
                            control = {<GreenCheckbox/>}
                            label = "Keep me signed in on this device."
                        /> */}
                        <br/>
                        <Button
                            type = "submit"
                            className = "button"
                            variant = "contained"
                           >
                            Create Account
                        </Button>
                    </form>
                </Grid>
                <hr className = "pageBreak"></hr>
            </Grid>
        </Box>
        <Grid container spacing = {3} style = {{ flexDirection : "column", alignContent: "center", margin: "20px 0", color: "#085ff7"}}>
            <Grid item>
                <Typography variant = "body2" component={Link} to="/login" style = {{cursor: "pointer",color: "#085ff7"}}>
                    Have an account? Sign in
                </Typography>
            </Grid>
            {/* <Grid item>
                <Typography variant = "body2" style = {{cursor: "pointer"}}>
                    Forgot Your Password
                </Typography>
            </Grid>
            */}
        </Grid>
       
        <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'left'}}
            open={snackBarOpen}
            autoHideDuration={3000}
            message={<span className="format__id">Regitered Succesfully</span>}
            ContentProps={{
                'aria-describedby':'message-id'
            }}
            onClose={()=>setSnackBarOpen(false)}
            action={[
                <IconButton
                    onClick={()=>{setSnackBarOpen(false)}}
                    color="inherit"
                    key="close"
                    aria-label="close"
                    size="large">
                    <CloseIcon/>
                </IconButton>
            ]} />
    </Container> : <Redirect to="/loginmain" />;
}