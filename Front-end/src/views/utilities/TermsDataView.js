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


const ViewData = () => {
    const [data, setData] = useState({title: '', description: ''});

    const handleSubmit = async () => {

        const searchParams = new URLSearchParams(window.location.search);
        const Dataid = searchParams.get('data');
        const Id = decodeURIComponent(Dataid);

        try {
            const response = await axios.get(`http://localhost:5000/signUp/viewTerms/${Id}`);
            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);



    return (
        <>
        <MainCard title="Terms Data" secondary={<SecondaryAction />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Terms Title">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="button" display="block" gutterBottom>
                                    {data.title}
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
            <Grid container spacing={gridSpacing}>
             <Grid item xs={12} sm={6}>
                 <SubCard title="Description">
                     <Grid container direction="column" spacing={1}>
                         <Grid item>
                             <MuiTypography variant="body1" display="block" gutterBottom>
                                 {data.description}
                             </MuiTypography>
                         </Grid>
                     </Grid>
                 </SubCard>
             </Grid>
         </Grid>
        </MainCard>
        
     </>
    );
};

export default ViewData;
