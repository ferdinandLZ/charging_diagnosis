import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';



export default function CheckboxList({inputdictionary,passcheckedlistnumber}) {
  const [checked, setChecked] = React.useState([...Array(inputdictionary.length).keys()]);
  // const [checked, setChecked] = React.useState([]);
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
    // console.log(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
              {inputdictionary.map((key, index) => {
              // {console.log(inputdictionary)}
              // {[0, 1, 2, 3].map((key,index) => { 
              const labelId = `checkbox-list-label-${index}`;
              return (
                <ListItem
                  key={key}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      {/* <CommentIcon /> */}
                    </IconButton>
                  }
                  disablePadding
                >
                        <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="end"
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
            // <PCard key={index} valuename={card.name} value={card.value[0]} showRedBackground={card.value[0] === 1}/>
                })}
     


    </List>
  );

}
CheckboxList.propTypes = {
  inputdictionary: PropTypes.array,
  passcheckedlistnumber:PropTypes.func
};