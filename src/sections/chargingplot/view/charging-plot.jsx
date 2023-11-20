import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import React, { useState, } from 'react';

import { Button } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Nav from '../Nav';
import canMessage from '../vector.json';
import multicandic from '../mutimessage.json';
import ChargingState from '../ChargingState';
import CheckboxList from '../Checkboxlist';
import SelectCellsData from '../SelectCellsData';
import SimpleLineChart from '../SimpleLineChart';
import DictionaryDisplay from '../DictionaryDisplay';
import selectmultimessagedata from '../Selectmultimessagedata';
import AppWebsiteVisits from '../app-website-visits';
import AppCurrentVisits from '../app-current-visits';
import calculateStatistics from '../calculateStatistics';


function Chargingplot() {

  const [type, setType] = useState('txt');
  const [cells, setCells] = useState({});
  const [multicells, setMultiCells] = useState({});
  const [stateS, setStateS] = useState(new Array(18).fill(false));
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [categoryState, setCategoryState] = useState({});

  const [selectsignaldefault, setselectsignaldefault] = useState({});
  const [selectsignalbylist, setselectsignalbylist] = useState({});
  const [selectplotdata, setselectplotdata] = useState([]);
  const [voltagedata,setvoltagedata] = useState([]);
  const [currentdata,setcurrentdata] = useState([]);
  const [socpievalue,setsocpievalue] = useState([80,50,0])

  let cdata=[];
  let vdata=[];


  const statedic = ["充电机充电握手报文", "充电机充电握手报文2", "BMS握手", "BMS握手2", "充电机辨识", "2#充电机辨识", '', '', "充电机同步时间信息", "充电桩最大输出能力",
    "BMS准备就绪（BRO）", "BMS准备就绪（BRO）2", "充电机准备就绪（CRO）", "2号充电机准备就绪（CRO）", "电池充电需求", "2#电池充电需求", "充电机充电状态", "2#充电机充电状态", "BSM2（发送动力电池状态信息2）", "BSM（BMS发送动力电池状态信息）"];
  // ------------------------------------

  const selectSignal = ["BMS充电错误报文", "充电机错误报文", "BMS终止充电（BST）", "充电机中止充电（CST）", "BMS统计数据", "BMS充电错误报文2", "充电机错误报文2", "BMS终止充电（BST）2", "充电机中止充电（CST）2", "BMS统计数据2", "BMS和车辆辨识BRM", "动力电池参数BCP", "电池充电总状态BCS"];

  const handleType = (Var) => {
    setType(Var);


  }
  const handleCells = (Var) => {
    setCells(Var);
    // console.log(Var)
    const multicelltmp = extractDataGroups(Var)
    setMultiCells(multicelltmp)
    console.log(multicelltmp)
    console.log(multicandic['31'].signals[3]);

    vdata = selectmultimessagedata(multicelltmp, multicandic['09'].signals[0], 'asc')
    setvoltagedata(vdata);
    cdata = selectmultimessagedata(multicelltmp, multicandic['09'].signals[1], 'asc')
    setcurrentdata(cdata)
    const socvalue =(mulicardCalculation(multicelltmp, multicandic['09'].signals[4], 'asc'))
    setsocpievalue(socvalue.value)
    // console.log(testres.map(items => parseFloat(items.data)));
    // console.log(testres.map(res =>res.time));
    // console.log(testres.map(res =>res.data));
    // function selectmultimessagedata(cell, state, type) {
    //   let resallmessdata = []

    //   const parselocation = (str, messnum) => {
    //     const byteoffset = -2;
    //     if (str.length === 3) {
    //       return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[2], 10))
    //     }
    //     if (str.length === 2) {
    //       return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[1], 10))
    //     }
    //     return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[2], 10))
    //   };

    //   function hex2bin(hex) {
    //     return (parseInt(hex, 16).toString(2)).padStart(8, '0');
    //   }
    //   const startmesnum = parseInt(state.startMes, 10);
    //   const endmesnum = parseInt(state.endMes, 10);
    //   const startnum = parselocation(state.startBit, 0);
    //   const endnum = parselocation(state.endBit, endmesnum - startmesnum) + 1;
    //   let allmessdata = [];

    //   let timecol = 2;
    //   let adrcol = 3;
    //   let dlccol = 6;
    //   switch (type) {
    //     case 'txt':
    //       timecol = 2;
    //       adrcol = 3;
    //       dlccol = 6;
    //       break;
    //     case 'asc':
    //       timecol = 0;
    //       adrcol = 2;
    //       dlccol = 5;
    //       break;
    //     default:
    //       timecol = 0;
    //       adrcol = 2;
    //       dlccol = 5;
    //   }
    //   console.log(cell[state.address]);


    //   if (cell[state.address].length > 0) {


    //     switch (state.signalfcn) {
    //       case 'vin':
    //         cell[state.address].map((message, index) => {
    //           for (let i = startmesnum; i < endmesnum + 1; i++) {
    //             const linemessdata = message[1 + i].slice(dlccol + 2, dlccol + 2 + 7);
    //             allmessdata = allmessdata.concat(linemessdata);

    //           }
    //           const startvinnum = parseInt(state.startBit[0], 10) - 2;
    //           const endvinnum = parseInt(state.endBit[0], 10) + (endmesnum - startmesnum) * 7 - 1;
    //           allmessdata = allmessdata.slice(startvinnum, endvinnum);

    //           const asciiString = allmessdata.map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
    //           resallmessdata.push({
    //             time: message[1 + startmesnum][timecol],
    //             data: asciiString,
    //           })
    //         })
    //         break;
    //       case 'select':
    //         cell[state.address].map((message, index) => {
    //           allmessdata = [];

    //           console.log(startmesnum)
    //           console.log(endmesnum)

    //           console.log(message);

    //           // eslint-disable-next-line no-plusplus
    //           for (let i = startmesnum; i < endmesnum + 1; i++) {

    //             const linemessdata = message[1 + i].slice(dlccol + 2, dlccol + 2 + 7);
    //             allmessdata = allmessdata.concat(linemessdata);
    //           }
    //           let allmessdatabin = ''

    //           allmessdata.join().split(",").forEach(str => {
    //             allmessdatabin = hex2bin(str) + allmessdatabin //reverse the order high -> low
    //           })
    //           // console.log("databefore select")
    //           // console.log(allmessdatabin);
    //           if (startnum === 0) {
    //             // if (startnum === 0) {
    //             allmessdatabin = allmessdatabin.slice(-endnum,);
    //           }
    //           else {
    //             allmessdatabin = allmessdatabin.slice(-endnum, -startnum);
    //           }
    //           // console.log("dataafter select")
    //           // console.log(allmessdatabin);
    //           let allmessdatavalue = parseInt(allmessdatabin, 2) * parseFloat(state.gain) + parseFloat(state.offset)
    //           allmessdatavalue = allmessdatavalue.toFixed(2);
    //           console.log(allmessdatavalue)
    //           resallmessdata.push({
    //             time: message[1 + startmesnum][timecol],
    //             data: allmessdatavalue,
    //           })
    //           return (0);

    //         })
    //         break;
    //     }//case


    //   }


    //   return (resallmessdata);

    // }

    function extractDataGroups(data) {
      const dataGroups = {};
      let currentGroup = [];
      let id
      /* eslint-disable no-plusplus */
      for (let i = 0; i < data.length; i++) {
        const currentData = data[i];

        if (!currentData[2]) {
          //  noting
        
         
        }
        else{
          const isStartCondition =
          currentData[2].startsWith('1cec') && currentData[6] === '10';

        if (isStartCondition) {
          currentGroup = [currentData];
          id = currentData[7];
        } else if (currentGroup.length > 0) {
          const isGroupCondition =
            currentData[2].startsWith('1cec') || currentData[2].startsWith('1ceb');

          if (isGroupCondition) {
            currentGroup.push(currentData);
          }

          const isEndCondition =
            currentData[2].startsWith('1cec') && currentData[6] === '13';

          if (isEndCondition) {
            if (!dataGroups[id]) {
              dataGroups[id] = [];
            }
            dataGroups[id].push([...currentGroup]);
            currentGroup = [];
          }
          }
        
        }
      }

      return dataGroups;
    }

    //   function extractDataGroups(data) {
    //     const dataGroups = {};
    //     let currentGroup = [];
    //     let id
    //     if (Var.length>0){
    //     for (let i = 0; i < data.length; i++) {
    //       const currentData = data[i];
    //       // console.log(currentData)
    //       if (currentData[2] === undefined){
    //         continue;
    //       }

    //       if (
    //         currentData[2].startsWith('1cec')  &&  currentData[6] === '10'
    //       ){            currentGroup = [currentData];
    //         id = currentData[7];
    //       }

    //       else if (currentGroup.length > 0) {
    //         if (currentData[2].startsWith('1cec') || currentData[2].startsWith('1ceb'))
    //           currentGroup.push(currentData);

    //         if (
    //           currentData[2].startsWith('1cec')  &&  currentData[6] === '13'
    //         ) {

    //           const id = currentGroup[0][7]; // Assuming the ID is in currentData[7]
    //           if (!dataGroups[id]) {
    //             dataGroups[id] = [];
    //           }
    //           dataGroups[id].push(currentGroup);
    //           currentGroup =  [] ;
    //         }
    //       }
    //     }

    //     return dataGroups;
    //   }
    //   }
    //   // console.log (Var)
    // }
  }

  const handlepasslistnumber = (Var) => {




    function selectDictionariesByIndices(data, indices) {
      // Initialize an empty object to store selected dictionaries.
      const selectedDictionaries = {};

      indices.forEach((index) => {
        if (index >= 0 && index < Object.keys(data).length) {
          const dictionaryKey = Object.keys(data)[index];
          selectedDictionaries[dictionaryKey] = data[dictionaryKey];
        }
      });

      return selectedDictionaries;
    }
    // console.log(selectDictionariesByIndices(selectsignaldefault,Var))
    setselectsignalbylist(selectDictionariesByIndices(selectsignaldefault, Var))
    // const selectedItems = Var.map(index => selectSignal[index]);
    // setselectsignalbylist(selectedItems)
    // setreslist(resaultatindex);
    // console.log(resaultatindex);
    // handleRunProgram();
  }

  const handleselectsignaldata = (Var) => {
    let plotdata = {}
    switch (Var.signalfcn) {
      case 'select':
        plotdata = selectmultimessagedata(multicells, Var, type);
        break
      case 'vin':
        break
      case 'version':
        break
      default:
        plotdata = SelectCellsData(cells, Var, type);
    }

    setselectplotdata(plotdata);
    // console.log(plotdata)

  }
  //------------------------------------
  const handleRunProgram = () => {
    // console.log(cardCalculation(cells,Stest,type))

    setvoltagedata([]);
    setcurrentdata([]);
    const resaultlist = {};
    const stateadd = [];
    const statelist = [];
    const statesignal = {
      address: '',
      startBit: '1.0',
      endBit: '8.7'
    }

    // eslint-disable-next-line no-empty
    if (Object.keys(multicells).length === 0) {
    }
    else {
      //  make a dic named reslist [sortname:{ signals:[{signalname:,value[]}]}]
      Object.keys(multicandic).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(multicandic, key)) {
          const value = multicandic[key].name;
          if (selectSignal.includes(value)) { //
            resaultlist[multicandic[key].name] = { signals: [] };
            multicandic[key].signals.map(signal => {
              resaultlist[multicandic[key].name].signals.push(mulicardCalculation(multicells, signal, type));
              return (signal);
            });
            // canMessage[key].signals.map(signal =>{console.log(signal)});
          }

          if (statedic.includes(value)) {
            stateadd.push(canMessage[key].signals[0].address);
          }

        }
      })
    }

    if (Object.keys(cells).length === 0) {
       // Do nothing intentionally
    }
    else {
      //  make a dic named reslist [sortname:{ signals:[{signalname:,value[]}]}]
      Object.keys(canMessage).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(canMessage, key)) {
          const value = canMessage[key].name;
          if (selectSignal.includes(value)) { //
            resaultlist[canMessage[key].name] = { signals: [] };
            canMessage[key].signals.map(signal => {
              resaultlist[canMessage[key].name].signals.push(cardCalculation(cells, signal, type));
              return (signal);
            });
            // canMessage[key].signals.map(signal =>{console.log(signal)});
          }

          if (statedic.includes(value)) {
            stateadd.push(canMessage[key].signals[0].address);
          }

        }
      })
    }

    // stateadd = ['100955F5', '100956F4', '1356','100AF456', '100AF555', '1801F456', '1801F555', '1807F456', '1808F456', '1826F456', '1826F555', '182755F5', '182756F4'];
    stateadd.map(adr => {
      statesignal.address = adr;
      statelist.push(SelectCellsData(cells, statesignal, type).length > 0);
      return (adr);
    })
    statelist.push(multicells['31'] !== undefined);
    statelist.push(multicells['0d'] !== undefined);
    statelist.push(multicells['09'] !== undefined);


  
    setStateS(statelist)
    // console.log(resaultlist)
    console.log(statelist)
    setIsDataLoaded(true);

    const selectedData = {};
    /* eslint-disable no-restricted-syntax */
    for (const key of selectSignal) {
      if (resaultlist[key]) {
        selectedData[key] = resaultlist[key];
      }
    }
    setselectsignaldefault(selectedData);
    setselectsignalbylist(selectedData);
    console.log(resaultlist);
    //  console.log(selectsignalbylist);


  }

  const cardCalculation = (cellsInput, S, T) => {
    const res = SelectCellsData(cellsInput, S, T);
    // console.log(cellsInput,S,T);
    let valres = calculateStatistics(res.map(item => parseInt(item.data, 10)));
    valres = valres.map(key => getValueFromDictionary(S.valueDescriptions, key));
    return ({ name: S.desCH, value: valres, address: S.address, startBit: S.startBit, endBit: S.endBit });
  }

  const mulicardCalculation = (cellsInput, S, T) => {
    const res = selectmultimessagedata(cellsInput, S, T);
    let valres = calculateStatistics(res.map(item => parseFloat(item.data)));
    switch (S.signalfcn) {
      case 'select':
        valres = calculateStatistics(res.map(item => parseFloat(item.data)));
        break;
      case 'vin':
        valres = [res[0].data, null, null];
        break;
      default:
        valres = calculateStatistics(res.map(item => parseFloat(item.data)));

    }


    return ({ name: S.desCH, value: valres, address: S.address, startBit: S.startBit, endBit: S.endBit, signalfcn: S.signalfcn,startMes:S.startMes,endMes:S.endMes,gain:S.gain,offset:S.offset});
  }

  function getValueFromDictionary(dictionary, key) {
    if (dictionary === null || dictionary === undefined) {
      return key;
    }

    if (dictionary[key] !== undefined) {
      return dictionary[key];
    }

    return key;
  }

  // const DictionaryDisplay = ({ selectdic, chargingStepState, toggleCategory }) => {
  //   // Sort the category keys based on the predefined order

  //   if (selectdic !== null && typeof selectdic === 'object') {
  //     return(
  //       <div>
  //         {Object.keys(selectdic).map(categoryKey => (
  //           <div key={categoryKey} className="category">
  //             <Button onClick={() => toggleCategory(categoryKey)}>
  //               {categoryKey}
  //             </Button>
  //             {!chargingStepState[categoryKey] && (
  //               <div className="card-grid">
  //                 {selectdic[categoryKey].signals.map((card, index) =>(
  //                   <PCard key={index} valuename={card.name} value={card.value[0]} showRedBackground={card.value[0] === 1}/>
  //                 ))}
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //       );

  // } else {
  //     // Handle the case where myObject is null or undefined
  //     console.log("into undef branch")
  //     // console.log(selectdic)
  //     return (0);
  // }


  //           }


  DictionaryDisplay.propTypes = {
    selectdic: PropTypes.object,
    chargingStepState: PropTypes.object,
    toggleCategory: PropTypes.func
  };
  // 设置所有分类的初始状态为 true，即默认显示卡片列表
  // const toggleCategory= categoryKey =>{}
  const toggleCategory = categoryKey => {
    setCategoryState(prevState => ({
      ...prevState,
      [categoryKey]: !prevState[categoryKey]
    }));
  };





  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={10} lg={12}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          <Nav
            passvar={handleCells}
            passtype={handleType} />
          <Button onClick={handleRunProgram}>Check</Button>
        </Typography>
      </Grid>

      <Grid xs={12} md={12} lg={12}>
        <ChargingState
          chargingstate={stateS}
        />
      </Grid>

      <Grid xs={6} md={3} lg={3}>
      {isDataLoaded || (Object.keys(selectsignalbylist).length > 0) ?( 
      
      <CheckboxList inputdictionary={selectSignal} passcheckedlistnumber={handlepasslistnumber} />
      ):(<d/>)
       }
      </Grid>

      <Grid xs={6} md={9} lg={9}>
        {isDataLoaded || (Object.keys(selectsignalbylist).length > 0) ? (



          <DictionaryDisplay selectdic={selectsignalbylist} toggleCategory={toggleCategory} chargingStepState={categoryState} passselectedsignal={handleselectsignaldata} />

        ) : (
          <Typography>Data is not loaded yet.</Typography>
        )}


      </Grid>
      <Grid xs={6} md={6} lg={6}>
        <SimpleLineChart pdata={selectplotdata} />

        {/* <selectDataChart pdata = {selectplotdata} /> */}
      </Grid>

      <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Charging Curve"
            subheader="current&voltage"
            chart={{
              labels: voltagedata.map(x=>x.time),
              series: [
                {
                  name: 'Current',
                  type: 'line',
                  fill: 'solid',
                  data: currentdata.map(x=>x.data),
                },
                     {
                  name: 'Voltage',
                  type: 'line',
                  fill: 'solid',
                  data: voltagedata.map(x=>x.data),
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'begain', value: socpievalue[1] },
                { label: 'charged', value:  socpievalue[0]-socpievalue[1] },
                { label: 'notcharging', value:  100-socpievalue[0]},
              ],
            }}
          />
        </Grid>
    </Grid>
  )
}
export default Chargingplot;


