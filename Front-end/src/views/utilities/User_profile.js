import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';
import useState from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { Edit, Visibility, Delete } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import AddTermsAndConditions from './Add_TermsConditions';

// ===============================|| COLOR BOX ||=============================== //



// ===============================|| UI COLOR ||=============================== //


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Game Mode', 'Play only Online', 6.0, 24, 4.0),
    createData('Payment terms', 'if you charge for the game', 9.0, 37, 4.3),
    createData('Number of palyer', 'Max 4 player can play', 16.0, 24, 6.0),
    createData('Roles', 'you can out if break the rules', 3.7, 67, 4.3),

  ];

function UserProfile() {

    return (
    <MainCard title="terms & conditions" secondary={<AddTermsAndConditions/>}>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell align="center">Description</TableCell>
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{row.name}</TableCell>
          <TableCell align="center">{row.calories}</TableCell>
          <TableCell align="center">
            <IconButton aria-label="view" color="secondary" onClick={() => handleView(row)}>
              <Visibility />
            </IconButton>
            <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(row)}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(row)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
 </TableContainer>

 </MainCard>
)};

export default UserProfile;

