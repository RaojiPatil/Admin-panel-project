import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
import { Box, Card, Grid, Typography } from '@mui/material';
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
import UpdateTermsAndConditions from './Update_terms_Coindition';
import { Pagination } from '@mui/material';
import ViewData from './TermsDataView';


const UserProfile = () => {
  const [rows, setRows] = useState([]);
  const [updateRow, setUpdateRow] = useState(null);
  const [viewRow, setViewRow] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const [users, setUsers] = useState();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const handleUpdate = (row) => {
    setOpen(true)
    setUpdateRow(row);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/signUp/getAllData');
        const data = await response.json();
        console.log(data.data);
        setRows(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteData = async (id) => {
    // console.log(id, "id");
    try {
      const response = await fetch(`http://localhost:5000/signUp/termsdelete/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data.data);
      // Update the state to remove the deleted row
      setRows((rows) => rows.filter((r) => r.id !== id));
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleView = async (row) => {
    setViewRow(row);
    const dataid = row;
    window.location.href = `/utils/util-User_profile_view?data=${dataid}`;
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };


  return (
    <MainCard title="Terms & conditions" secondary={<AddTermsAndConditions/>}>
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
            {rows.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((row) => (
            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{row.title}</TableCell>
            <TableCell align="center">{row.description}</TableCell>
            <TableCell align="center">
              <IconButton aria-label="view" color="secondary" onClick={() => handleView(row._id)}>
                <Visibility />
              </IconButton>
              <IconButton aria-label="edit" color="primary" onClick={() => handleUpdate(row)}>
                <Edit color="primary" />
              </IconButton>
              <IconButton aria-label="delete" color="secondary" onClick={() => handleDeleteData(row._id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Box sx={{ marginTop: 2, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Pagination
        count={Math.ceil(rows.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        shape="rounded"
      />
    </Box>
    {updateRow && (
      <UpdateTermsAndConditions
        userid={updateRow}
        open={true}
        setOpen={setUpdateRow}
      />
    )}
  </TableContainer>
</MainCard>
);
};

export default UserProfile;
