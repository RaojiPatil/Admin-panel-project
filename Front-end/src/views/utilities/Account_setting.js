import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

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

// ===============================|| COLOR BOX ||=============================== //



// ===============================|| UI COLOR ||=============================== //

const AccountSetting = () => (
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
                                type="password"
                                autoComplete="current-password"
                                />
                                <TextField
                                id="outlined-password-input"
                                label="LastName"
                                type="password"
                                autoComplete="current-password"
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
                                type="password"
                                autoComplete="current-password"
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
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                />
                            </Box>
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
                        <Button variant="contained" 
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
                                label="Old Pasword"
                                type="password"
                                autoComplete="current-password"
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
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                />
                            </Box>
                            <Button variant="contained" 
                                sx={{
                                    marginTop: "20px",
                                    marginLeft: "150px",
                                    width: "190px",
                                }}
                            >Change Password</Button>
                        </MuiTypography>
                    </Grid>

                </Grid>
        </Grid>
    </Grid>
</MainCard>
);

export default AccountSetting;
