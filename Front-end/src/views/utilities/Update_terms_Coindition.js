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
import { Edit } from '@mui/icons-material';

export default function UpdateTermsAndConditions({ open, setOpen, userid}) {

  const [termstitle, setTitle] = useState( userid.title );
  const [termsdescription, setDescription] = useState(userid.description);
  const [state, setState] = useState('');
  const [opens, setOpens] = useState(open);

  console.log("userid". userid);

  const handleClose = () => {
    setOpens(false);
    window.location.reload(true);
  };


  const handleSubmit = async (id) => {

    const payload = {
      id: userid?._id,
      title: termstitle,
      description: termsdescription
    };

    try {
      const response = await axios.put(`http://localhost:5000/signUp/updateTermsAndCondData`, payload );
      console.log(response.data);
      handleClose();
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };


   useEffect (() => {
    // console.log(userid, "userid");
    // handleSubmit();
   }, []);

  return (
    <div>
      <Dialog
        open={opens}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid item xs={12} sm={12}>
          <Grid container direction="flex" spacing={10} sx={{ padding: 5 }}>
            <Grid item>
              <MuiTypography variant="button" display="block" gutterBottom>
                <Typography variant="h3" sx={{ margin: 2 }}>
                  Update terms and conditions
                </Typography>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '52ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="title"
                    label="Title"
                    type="text"
                    value={termstitle}
                    onChange={(event) => setTitle(event.target.value)}
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
                    id="description"
                    label="Description"
                    type="text"
                    autoComplete="current-password"
                    multiline
                    rows={4}
                    value={termsdescription}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: '20px',
                    marginLeft: '150px',
                    width: '150px',
                  }}
                  onClick={handleSubmit}
                >
                  Update New Terms
                </Button>
              </MuiTypography>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
