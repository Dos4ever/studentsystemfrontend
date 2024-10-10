import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';



export default function Student() {
  const paperStyle ={padding: "50px 20px", width:600, margin: "20px auto"}
  const [name, setName] = React.useState('Yasser');
  const [address, setAddress] = React.useState('HH');
  const handelClick =(e)=>{
    e.preventDefault()
    const Student = {name, address}
    console.log(Student)
    fetch("https://localhost:8080/student/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(Student)
    }).then(()=> {
      console.log("New Student added")
    })
  }

  return (

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}>Add Student</h1>
       
       <form>
          <TextField id="outlined-basic" label="Student Name" sx={{ paddingBottom: 2 }} variant="outlined" fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)} />

          <Button color="secondary" variant="contained" onClick={handelClick}>Submit</Button>
        </form> 
        {name}
        {address}
      </Paper>
      </Container>
  );
}
