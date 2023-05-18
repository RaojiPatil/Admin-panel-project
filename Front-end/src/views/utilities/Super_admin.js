import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <MainCard title="Super-Admin" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <SubCard title="Agent">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="button" display="block" gutterBottom>
                                Agent text
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Sub Admin">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="button" display="block" gutterBottom>
                                Agent text
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
    
        </Grid>
    </MainCard>
);

export default Typography;
