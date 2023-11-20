const SelectCellsData = (cells,state,type) =>{

    const parselocation = (str,messnum) => {
      const byteoffset = -1;
      // const bitoffset = 0;
      if (str.length === 3) {
        return parseInt((parseInt(str[0],10) + byteoffset).toString() + str[2], 8)
      }
      if (str.length ===2){
        return parseInt((parseInt(str[0],10) + byteoffset).toString() + str[1], 8)
      }
      return parseInt((parseInt(str[0],10) + byteoffset).toString() + str[2], 8)
    };
    function hex2bin(hex) {
      return (parseInt(hex, 16).toString(2)).padStart(8, '0');
    }  

    function preprocessString(str) {
      // 忽略大小写，去掉首位0和末尾x
      return str.toLowerCase().replace(/^0|0$|x$/g, '');
    }
    
    function compareStrings(str1, str2) {
      const processedStr1 = preprocessString(str1);
      const processedStr2 = preprocessString(str2);
    
      if (processedStr1 === processedStr2) {
        return true; // 字符串相等
   
      } 
      return false; // 
      
    }
    
    const startnum = parselocation(state.startBit);
    const endnum = parselocation(state.endBit) + 1;
    let timecol = 2;
    let adrcol = 3;
    let dlccol = 6;
    switch (type) {
      case 'txt':
        timecol = 2;
        adrcol = 3;
        dlccol = 6;
        break;  
      case 'asc':
        timecol = 0;
        adrcol = 2;
        dlccol = 5;
        break;
      default:
        timecol = 0;
        adrcol = 2;
        dlccol = 5;        
    }
    const res = cells.reduce( (result, line) =>{   
    if (line[adrcol]==null || state.address.length === 0 ){
    // console.log("empty branch with line:",line[adrcol]);
      // empty  
    // console.log("go empty"); // debut 
    }else if (compareStrings(line[adrcol],state.address)) {
      const datalength = parseInt(line[dlccol], 16);
      // change Hex to Bin str
      let datastr = ""
      line.slice((dlccol+1), (dlccol+1) + datalength).join().split(",").forEach(str => {
        datastr = hex2bin(str) + datastr
      })
      // console.log(datastr);// for debug
      if (endnum > datalength*8) {// empty
      //  when endnum bigger than the data length
      }else if (startnum === 0) {
      // if (startnum === 0) {
        datastr = datastr.slice(-endnum,);
      }
      else {
        datastr = datastr.slice(-endnum, -startnum);
      }
      datastr = parseInt(datastr,2)
      return result.concat({
        time: line[timecol],
        add: line[adrcol],
        data: datastr,
      });
    }
    return result;
  }, [])

  return res

};
export default SelectCellsData;