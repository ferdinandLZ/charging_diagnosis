import * as React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
function SimpleLineChart({pdata}) {
if (pdata.length >0){

  return (
   
    <LineChart
      width={800}
      height={500}
      series={[
        // { curve: "linear",data: pdata.map(x=>parseInt(x.data,2)) },
        { curve: "linear",data: pdata.map(x=>parseFloat(x.data)) },
    
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

