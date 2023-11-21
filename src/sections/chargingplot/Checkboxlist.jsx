import PropTypes from 'prop-types';
import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export default function CheckboxList({ inputdictionary, passcheckedlistnumber }) {
  const [checked, setChecked] = useState([...Array(inputdictionary.length).keys()]);
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    passcheckedlistnumber(newChecked);
    setChecked(newChecked);
  };

  return (

    <List sx={{  bgcolor: 'background.paper' }}>
      {inputdictionary.map((key, index) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <ListItem key={key} disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={key} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

CheckboxList.propTypes = {
  inputdictionary: PropTypes.array,
  passcheckedlistnumber: PropTypes.func,
};
