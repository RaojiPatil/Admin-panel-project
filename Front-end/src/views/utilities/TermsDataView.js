import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { Divider } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id'); 

const ViewData = () => {


    const handleSubmit = async () => {
        
    const searchParams = new URLSearchParams(window.location.search);
    const Dataid = searchParams.get('data');
    const decodedId = decodeURIComponent(Dataid);
        try {
          const response = await axios.get(`http://localhost:5000/signUp/viewTerms?id=${decodedId}`);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
    
      useEffect(() => {
        handleSubmit();
      }, []);

    return(
    <MainCard title="Terms Data" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
            <SubCard title="Club">
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                            Terms Data
                        </MuiTypography>
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
    </Grid>
    </MainCard>
    );
};

export default ViewData;
