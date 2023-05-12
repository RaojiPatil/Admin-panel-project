import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MuiTypography from '@mui/material/Typography';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Input } from '@mui/material';


export default function AddTermsAndConditions() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleSubmit = () => {
      axios
        .post('http://localhost:5000/signUp/addNewTermsAndCondData', { title, description })
        .then((response) => {
          console.log(response.data); // Log the response from the server
          handleClose(); // Close the dialog box
          window.location.reload(true);
        })
        .catch((error) => {
          console.error(error); // Log any errors that occur
        });
    };


  return (
    <div>
      <IconButton sx={{ bgcolor: '#1769aa', marginRight: '40px' }} aria-label="add" onClick={handleClickOpen}>
        <AddIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <Grid item xs={12} sm={12}>
          <Grid container direction="flex" spacing={10} sx={{ padding: 5 }}>
            <Grid item>
              <MuiTypography variant="button" display="block" gutterBottom>
                <Typography variant="h3" sx={{ margin: 2 }}>
                  Add New terms and conditions
                </Typography>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '52ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="title" label="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
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
                    id="description"
                    label="Description"
                    type="text"
                    autoComplete="current-password"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                   <input
                    type="file"

                  />

                <Button
                  variant="contained"
                  sx={{
                    marginTop: '20px',
                    marginLeft: '150px',
                    width: '150px',
                  }}
                  onClick={handleSubmit}
                >
                  Add New Terms
                </Button>
              </MuiTypography>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
