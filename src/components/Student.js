import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';



export default function Student() {
  const paperStyle ={padding: "50px 20px", width:600, margin: "20px auto"}
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [students, setStudents] = useState([])

  const handelClick =(e)=>{
    e.preventDefault()
    const student = {name, address}
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(student)
    }).then(()=> {
      console.log("New Student added")
    })
  }

useEffect(()=> {
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=> {
    setStudents(result);
  })
},[])


  return (

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}>Add Student</h1>
       
       <form>
          <TextField id="outlined-basic" label="Student Name" sx={{ paddingBottom: 2 }} variant="outlined" fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic" label="Student Address"  sx={{ paddingBottom: 2 }} variant="outlined" fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)} />

          <Button color="secondary" variant="contained" onClick={handelClick}>Submit</Button>
        </form> 
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
          Id: {student.id}<br/>
          Name: {student.name}<br/>
          Address: {student.address}
          </Paper>
           
        ))}
      </Paper>
      </Container>
  );
}
