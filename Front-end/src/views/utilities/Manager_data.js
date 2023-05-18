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

// ===============================|| COLOR BOX ||=============================== //



// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
    <MainCard title="Manager-panel" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
            <SubCard title="Club">
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                            Club Data
                        </MuiTypography>
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
            <SubCard title="Club">
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                        Club text
                        </MuiTypography>
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>

    </Grid>
</MainCard>
);

export default UIColor;
