import * as React from 'react';
import PropTypes from 'prop-types';

import { LineChart } from '@mui/x-charts/LineChart';


function SimpleLineChart({pdata}) {
  const make = (pdata.length<1000);
if (pdata.length >0){

  return (
   
    <LineChart
      width={800}
      height={500}

      series={[
        // { curve: "linear",data: pdata.map(x=>parseInt(x.data,2)) },
        { curve: "linear",data: pdata.map(x=>parseFloat(x.data)), 
        showMark: make,},
    
      ]}
      xAxis={[{ 
        scaleType: ['time'], 
        data: pdata.map(x=>x.time),
         }]}
    />
    
  )
    }
}

export default  SimpleLineChart

SimpleLineChart.propTypes = {
  pdata: PropTypes.object
}

