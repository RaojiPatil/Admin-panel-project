import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
// import OtpInput from 'react-otp-input';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { MuiOtpInput } from 'mui-one-time-password-input'

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import axios from 'axios';
// ============================|| FIREBASE - LOGIN ||============================ //

const AuthForgotPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);
    const [logindata, setLoginData] = useState('');
    // const [otp, setOtp] = useState('');

    const [value, setValues] = useState('')

    const handleOtpChange = (newvalue) => {
        setValues(newvalue)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleSubmit1 = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/signUp/otpsend', { email })
          .then(response => {
            window.alert('OTP Sent successful');
             console.log(response.data.data.code, "response.data");
             setLoginData(response.data.data.code);
          })
          .catch(error => {
            console.error(error);
            window.alert('Login failed');
          });
      };
    //   console.log(logindata, 'logindata1');

    const changePassword = () => {
        // console.log(value, 'value')
        // console.log(logindata, 'logindata');

        if(value === logindata) {
           window.alert('Set your New password');
           navigation('/utils/util-Account_setting');
        } else {
            window.alert('OTP not match');
            console.log("not match")
        }
    }

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: 'info@codedthemes.com',
                    password: '123456',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange,handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit1} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
                            <OutlinedInput
                                value={email}
                                id="outlined-adornment-email-login"
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleEmailChange}
                                label="Email Address"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <MuiOtpInput 
                            sx={{ m: 2, ml: 5, width: '80%' }}
                            length={4} 
                            value={value} 
                            onChange={handleOtpChange} />
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                   Forget Password
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
                <Button
                    sx={{ mt: 2 }}
                    fullWidth
                    size="large"
                    type='submit'
                    variant="contained"
                    color="secondary"
                    onClick={changePassword}
                >
                    Check OTP
                </Button>
        </>
    );
};

export default AuthForgotPassword;
