import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

function DictionaryDisplay({ selectdic, chargingStepState, toggleCategory,passselectedsignal}) {


  const handleCellClick = (data) => {
    passselectedsignal(data);
    console.log(data);
  };

  return (
  
      <TableContainer component={Paper} sx={{ maxHeight: 690 }} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>

              <TableCell>Signals</TableCell>

                <TableCell align="right">Max</TableCell>

                <TableCell align="right">Min</TableCell>
                <TableCell align="right">Avg</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(selectdic).map((categoryKey) => (
              <TableRow key={categoryKey}>
                <TableCell>
                  <Button onClick={() => toggleCategory(categoryKey)}>{categoryKey}</Button>
                </TableCell>
                <TableCell>
                  {selectdic[categoryKey].signals.map((signal, index) => (
                    <TableRow>
                    <TableCell>
                    <Button key={index} onClick={() => handleCellClick(signal)}>
                      {signal.name} 
                    </Button>
                    </TableCell>

                    <TableCell align="right">{signal.value[0]}</TableCell>
                    <TableCell align="right">{signal.value[1]}</TableCell>
                    <TableCell align="right">{signal.value[2]}</TableCell>
                    </TableRow>


                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      // {selectedData && (
      //   <div>
      //     <h2>Time Plot</h2>
      //     {/* 在这里插入时间图表 */}
      //   </div>
      // )}
  
  );
}
DictionaryDisplay.propTypes = {
  selectdic: PropTypes.object,
  chargingStepState: PropTypes.object,
  toggleCategory: PropTypes.func, 
  passselectedsignal:PropTypes.func
};


export default DictionaryDisplay;