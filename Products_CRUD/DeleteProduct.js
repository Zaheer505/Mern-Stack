import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';
import shopdata from './shop-data.json'
const API = 'http://localhost:3000/user'

function DeleteProduct() {
    var names = [];
    shopdata.forEach( function(entity) {
    names.push(entity.name);
    });

const [name, setName] = useState("")

 const deleteData = async () =>
{
  var index = shopdata.findIndex(item => item.name === name);
  console.log(shopdata[index].id)
//   await axios.delete(API)
//   .then (res => {
//   }).catch(err => {
//   console.log(err);
//   })
}
const handleNameChange = (event) => {
  setName(event.target.value);
}

  return (
    <div className="App">
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '80%'},
      }}
      noValidate
      autoComplete="off"
    >

    <Select onChange={handleNameChange}> 
      {names.map((name) => <MenuItem value={name}>{name}</MenuItem>)}
    </Select>





  <Button
    onClick={deleteData}>
        Submit
            </Button>
  </Box>
</div>
  );
}

export default DeleteProduct;