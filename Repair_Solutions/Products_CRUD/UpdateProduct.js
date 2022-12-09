import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';
import shopdata from './shop-data.json'
const API = 'http://localhost:3000/user'

function UpdateProduct() {
    const [oldName, setOldName] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleOldName = (event) => { setOldName(event.target.value); };
    const handleName = (event) => { setName(event.target.value); };
    const handleCategory = (event) => { setCategory(event.target.value); };
    const handleUrl = (event) => { setImgUrl(event.target.value); };
    const handlePrice = (event) => { setPrice(event.target.value); };

    const updateData = async () => {
    
    var index = shopdata.findIndex(item => item.name === oldName);
    console.log(shopdata[index].id)
      const body = {
        name: name,
        category: category,
        imageUrl: imgUrl,
        price: price
        }
        console.log(body);
//        await axios.put(shopdata[index].id, body) // API
//        alert("Data Updated");
      }

    return (
      <div>
    <Box sx={{ margin: 15, width: '50%'}}>
    <h2>Update Product</h2>
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >

<Select onChange={handleOldName}> 
      {shopdata.map(({name}) => <MenuItem value={name}>{name}</MenuItem>)}
    </Select>


<TextField
  autoComplete='off'
  id="outlined-basic"
  name='Name'
  label="Name" 
  value={name} 
  variant="outlined"
  onChange={handleName} />



    <FormControl>
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Category"
      value={category}
      onChange={handleCategory}
    >
      <MenuItem value="Apple">Apple</MenuItem>
      <MenuItem value="Samsung">Samsung</MenuItem>
      <MenuItem value="Oneplus">One Plus</MenuItem>
      <MenuItem value="Sony">Sony</MenuItem>
      <MenuItem value="Huawei">Huawei</MenuItem>
      <MenuItem value="Nokia">Nokia</MenuItem>
    </Select>
  </FormControl>


  <TextField 
  id="outlined-basic"
  label="Image Url" 
  value={imgUrl} 
  variant="outlined"
  onChange={handleUrl} />

<TextField 
  id="outlined-basic"
  label="Price" 
  value={price} 
  variant="outlined"
  onChange={handlePrice} />


  <Button
  variant="contained"
  onClick={updateData}
  
>
  Submit
</Button>
  </Box>
  </Box>
      </div>
    );
  }
  
  export default UpdateProduct;