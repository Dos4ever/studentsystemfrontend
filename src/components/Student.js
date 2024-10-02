import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  marginTop: theme.spacing(4),
}));

export default function Student() {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');

  return (
    <StyledContainer>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <h1 style={{ color: 'blue' }}>Add Student</h1>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic-1"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic-2"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
      </Paper>
    </StyledContainer>
  );
}
