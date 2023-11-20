import PropTypes from 'prop-types';

import React, { useState,  } from 'react';


// import Dropdown from 'react-chart-editor/lib/components/widgets/Dropdown';
// import FormControl from 'react-bootstrap/FormControl';

// import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";

const Input = styled('input')({
  display: 'none',
});



// import { FormControl } from '@mui/material';

// import FloatingLabel from 'react-bootstrap/FloatingLabel'
// import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = ({ passvar, passtype}) => {
 
  const handleFile = (e) => {

    const content = e.target.result;
    // const files = e.target;
    // console.log(files)
    // console.log(files.type) //
    // console.log(content)//debug
    const taltaldata = content.split('\n').map( (el) => el.split(/\s+/) );

    passvar(taltaldata.slice(1));
    // console.log(taltaldata)
    let cellsAddr = taltaldata.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t[3] === thing[3]
      ))
    )
    cellsAddr = cellsAddr.slice(1)
    let cellsAddrarry = cellsAddr.map(line => line[3])
    cellsAddrarry = cellsAddrarry.filter(it => it);
  
  }
  // path asc
  const handleFileasc = (e) => {

    const content = e.target.result;
    const files = e.target;
    // console.log(files)

    const taltaldata = content.split('\n').map( (el) =>  el.split(/\s+/) );


    passvar(taltaldata.slice(2));
    // console.log(taltaldata);
    let cellsAddr = taltaldata.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t[2] === thing[2]
      ))
    )
    // filter the duplicated adress [2] is the colom number of the total array.

    cellsAddr = cellsAddr.slice(2)
    // console.log("celladrr:",cellsAddr);
    let cellsAddrarry = cellsAddr.map(line => line[2])// Can adress
    cellsAddrarry = cellsAddrarry.filter(it => it);

  }
  const handleChangeFile = (file) => {
    // console.log(file)

    const ftype = file.name.split('.').slice(1)[0];
    

    //  debug
    // console.log(ftype);
    const fileData = new FileReader();
    if (file) {
      fileData.readAsText(file, 'gb2312');
    }
    // Select path depands on the file type

    passtype (ftype)


    switch(ftype){
      case 'txt':
      case 'TXT':
        fileData.onloadend = handleFile;
        console.log("go to the txt branch")

        break;
      case 'ASC':
      case 'asc':
        fileData.onloadend = handleFileasc;
        console.log("go to the asc branch")

        break;
      default: 
        fileData.onloadend = handleFileasc;
        console.log("go to the asc branch")
     
  }
  }

return (

    <TextField
      variant="standard"          
      type="text"
      InputProps={{
        endAdornment: (
          <IconButton component="label">

            <input

              type="file"
              
              onChange={e =>
                handleChangeFile(e.target.files[0])} 
              name="[licenseFile]"
            />
          </IconButton>
        ),
      }}
    />                 
        
  );

};

export default Nav;

Nav.propTypes = {
  passvar: PropTypes.func,
  passtype: PropTypes.func

};