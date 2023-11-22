import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

function ChargingState({chargingstate}) {

    const labelProps = {};
    labelProps.error = true
   return (
    <Box sx={{ width: '100%' }}>
      <Stepper  alternativeLabel>

      <Step key = "充电机握手CHM" active={chargingstate[0]|| chargingstate[1]}>
        <StepLabel >充电机握手CHM</StepLabel>
        </Step> 

        <Step key = "BMS握手BHM" active={chargingstate[2]|| chargingstate[3]}>
        <StepLabel >BMS握手BHM</StepLabel>
        </Step> 

        <Step key = "充电机辨识CRM" active={chargingstate[4]|| chargingstate[5]}>
        <StepLabel >充电机辨识CRM</StepLabel>
        </Step> 

        <Step key = "车辆辨识BRM" active={chargingstate[18]}>
        <StepLabel >车辆辨识BRM</StepLabel>
        </Step> 

        <Step key = "动力蓄电池充电参数BCP" active={chargingstate[19]}>
        <StepLabel >动力蓄电池充电参数BCP</StepLabel>
        </Step> 

        <Step key = "充电机发送时间同步信息CTS"  active={chargingstate[6]}>
        <StepLabel >充电机发送时间同步信息CTS</StepLabel>
        </Step> 

        <Step key = "充电机最大输出能力CML" active={chargingstate[7]}>
        <StepLabel >充电机最大输出能力CML</StepLabel>
        </Step> 

        <Step key = "BMS充电准备就绪BRO" active={chargingstate[8]||chargingstate[9]}>
        <StepLabel >BMS充电准备就绪BRO</StepLabel>
        </Step> 

        <Step key = "充电机输出准备就绪CRO" active={chargingstate[10]||chargingstate[11]}>
        <StepLabel >充电机输出准备就绪CRO</StepLabel>
        </Step> 

        <Step key = "电池充电需求BCL" active={chargingstate[12]||chargingstate[13]}>
        <StepLabel >电池充电需求BCL</StepLabel>
        </Step> 

        <Step key = "电池充电总状态BCS" active={chargingstate[20]}>
        <StepLabel >电池充电总状态BCS</StepLabel>
        </Step> 


        <Step key = "充电机充电状态CCS" active={chargingstate[14]||chargingstate[15]}>
        <StepLabel >充电机充电状态CCS</StepLabel>
        </Step>

        <Step key = "动力电池状态信息BSM" active={chargingstate[16]||chargingstate[17]}>
        <StepLabel >动力电池状态信息BSM</StepLabel>
        </Step>
      </Stepper>
    </Box>


    // <Pagination>
    //   <Pagination.Item active={chargingstate[0]|| chargingstate[1]}>充电机握手CHM</Pagination.Item>
    //   <Pagination.Item active={chargingstate[2]|| chargingstate[3]}>BMS握手BHM</Pagination.Item>
    //   <Pagination.Item active={chargingstate[4]|| chargingstate[5]}>充电机辨识CRM</Pagination.Item>
    //   <Pagination.Item active={false}>车辆辨识BRM</Pagination.Item>
    //   <Pagination.Item active={false}>动力蓄电池充电参数BCP</Pagination.Item>
    //   <Pagination.Item active={chargingstate[6]}>充电机发送时间同步信息CTS</Pagination.Item>
    //   <Pagination.Item active={chargingstate[7]}>充电机最大输出能力CML</Pagination.Item>
    //   <Pagination.Item active={chargingstate[8]||chargingstate[9]}>BMS充电准备就绪BRO</Pagination.Item>
    //   <Pagination.Item active={chargingstate[10]||chargingstate[11]}>充电机输出准备就绪CRO</Pagination.Item>
    //   <Pagination.Item active={chargingstate[12]||chargingstate[13]}>电池充电需求BCL</Pagination.Item>
    //   <Pagination.Item active={false}>电池充电总状态BCS</Pagination.Item>
    //   <Pagination.Item active={chargingstate[14]||chargingstate[15]}>充电机充电状态CCS</Pagination.Item>
    //   <Pagination.Item active={chargingstate[16]||chargingstate[17]}>动力电池状态信息BSM</Pagination.Item>
    // </Pagination>
  )

}
ChargingState.propTypes = {
  chargingstate: PropTypes.array
};

export default ChargingState;

