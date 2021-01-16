import React, {useState} from 'react';

import {IconButton,Button, Container, Paper, Grid,Box,TextField} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



function App() {

  const inputName = {  name:"", email:"", phone:"", address:"" }
  const [user, Setuser] = useState([inputName])

 const adduser = ()=>{
   Setuser([...user,inputName])
 }


 const onChange=(e,index)=>{
   const updateuser = user.map((user,i)=>(index===i)
    ?
   Object.assign(user,{[e.target.name]
     :e.target.value})
     :user
 )
 Setuser(updateuser)
 }


 // delete inbox button
const removeUser= (index)=>{
  const filterUser = [...user];
  filterUser.splice(index,1)
  Setuser(filterUser)
}
  return (
   <>
<Container >
<Paper component={Box} p={4} m={3}>
  {
    user.map((inuser,index)=>(
      <Grid container spacing={3} key={index} className={{spacing:4}}>
        <Grid item md={3}  >
          <TextField
             label="Name" name="name" value={user.name} onChange={e=>onChange(e, index)}  color="secondary" autoComplete="off" fullWidth
          />
        </Grid>

        <Grid item md={3}>
          <TextField
             label="Email" name="email" value={user.email}  onChange={e=>onChange(e,index)} autoComplete="off"  fullWidth
          />
        </Grid>
        <Grid  item md={3}>
          <TextField
             label="Phone"  name="phone" value={user.phone}  onChange={e=>onChange(e,index)} autoComplete="off"  fullWidth
          />
        </Grid>
        <Grid item md={2}>
          <TextField
             label="Address" name="address"  value={user.address}  onChange={e=>onChange(e,index)} autoComplete="off"  fullWidth
          />
        </Grid>
        <Grid item md={1}>
         <IconButton color="info" onClick={()=>removeUser(index)}>
           <DeleteForeverIcon/>
         </IconButton>

        </Grid>
      </Grid>

    )

    )
  }
  <Button variant="contained" color="secondary" style={{marginTop:10}} onClick={adduser}>
  Add more
</Button></Paper>

</Container>
   </>
  );
}

export default App;
