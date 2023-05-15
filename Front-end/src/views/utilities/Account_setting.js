import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';
import {useState} from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';

function AccountSetting() {
    
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [file, setFile] = useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hii');
    try {
        console.log('hii111');
      const response = await axios.post("http://localhost:5000/signUp/changepassword", { email, oldPassword, newPassword });

      if (response.data.status === 200 ) {
        console.log(response.data);
        window.alert("Password Update Successfully")
        // handle success response
      } else {
        console.log('Response data is empty.');
        window.alert("Password Not Updated")
      }
    } catch (error) {
      console.log("error", error.response.data);
      // handle error response
    }
  };

  const handleUpload = async () => {
    console.log("hi");
    axios
      .post('http://localhost:5000/signUp/uploadfile', { fname, lname, email, mobile, file })
      .then((response) => {
        console.log(response.data); // Log the response from the server
      })
      .catch((error) => {
        console.error(error); // Log any errors that occur
      });
  };
    
    return (
    <MainCard title="Account-Setting" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
                <Grid container direction="flex" spacing={10}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                          <h2>Account-Details</h2>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="First Name"
                                type="text"
                                autoComplete="firstname"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                />
                                <TextField
                                id="outlined-password-input"
                                label="LastName"
                                type="text"
                                autoComplete="lastname"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="Email"
                                type="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '52ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="Mobile Number"
                                type="number"
                                autoComplete="number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                />
                            </Box>
                             <input
                                id='file'
                                type='file'
                                value={file}
                                onChange={(e) => setFile(e.target.value)}
                                />
                        </MuiTypography>
                    </Grid>

                    <Grid item>
                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center"
                        sx={{
                           marginTop: "50px",
                           marginLeft: "130px",
                        }}
                        >
                            <Avatar 
                            src="/broken-image.jpg"
                            sx={{
                                width: 150,
                                height: 150,
                                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                '&:hover': {
                                cursor: 'pointer',
                                },
                            }}
                            />
                        </Stack>
                        <Button 
                        variant="contained" 
                        onClick={handleUpload}
                            sx={{
                                marginTop: "20px",
                                marginLeft: "150px",
                                width: "190px",
                             }}
                             
                        >Submit</Button>
                    </Grid>

                </Grid>
        </Grid>

        <Divider sx={{ width: '100%', marginTop: '10px' }}  />

            <Grid item xs={12} sm={12}>
                <Grid container direction="flex" spacing={10}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                          <h2>Change Password</h2>
                          <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="Email"
                                type="Email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                            </Box>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="Old Pasword"
                                type="email" 
                                autoComplete="current-password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '52ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="New Password"
                                type="password"
                                autoComplete="current-password"
                                value={newPassword} 
                                onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </Box>
                            {/* <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '52ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                id="outlined-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                />
                            </Box> */}
                            <Button variant="contained" 
                                sx={{
                                    marginTop: "20px",
                                    marginLeft: "150px",
                                    width: "190px",
                                }}
                                onClick={handleSubmit}
                            >Change Password</Button>
                        </MuiTypography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    </MainCard>
    );
}

export default AccountSetting;
