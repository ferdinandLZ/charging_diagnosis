function selectmultimessagedata(cell, state, type) {
    const resallmessdata = []

    const parselocation = (str, messnum) => {
        const byteoffset = -2;
        if (str.length === 3) {
            return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[2], 10))
        }
        if (str.length === 2) {
            return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[1], 10))
        }
        return ((parseInt(str[0], 10) + byteoffset + 7 * messnum) * 8 + parseInt(str[2], 10))
    };

    function hex2bin(hex) {
        return (parseInt(hex, 16).toString(2)).padStart(8, '0');
    }
    const startmesnum = parseInt(state.startMes, 10);
    const endmesnum = parseInt(state.endMes, 10);
    const startnum = parselocation(state.startBit, 0);
    const endnum = parselocation(state.endBit, endmesnum - startmesnum) + 1;
    let allmessdata = [];

    let timecol = 2;
    // let adrcol = 3;
    let dlccol = 6;
    switch (type) {
        case 'txt':
            timecol = 2;
            // adrcol = 3;
            dlccol = 6;
            break;
        case 'asc':
            timecol = 0;
            // adrcol = 2;
            dlccol = 5;
            break;
        default:
            timecol = 0;
            // adrcol = 2;
            dlccol = 5;
    }
    // console.log(cell[state.address]);


    if (cell[state.address].length > 0) {


        switch (state.signalfcn) {
            case 'vin':
                cell[state.address].map((message, index) => {
                    /* eslint-disable no-restricted-syntax */
                    for (let i = startmesnum; i < endmesnum + 1; i+=1) {
                        const linemessdata = message[1 + i].slice(dlccol + 2, dlccol + 2 + 7);
                        allmessdata = allmessdata.concat(linemessdata);
                        

                    }
                    const startvinnum = parseInt(state.startBit[0], 10) - 2;
                    const endvinnum = parseInt(state.endBit[0], 10) + (endmesnum - startmesnum) * 7 - 1;
                    allmessdata = allmessdata.slice(startvinnum, endvinnum);

                    const asciiString = allmessdata.map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
                    resallmessdata.push({
                        time: message[1 + startmesnum][timecol],
                        data: asciiString,
                    })
                return (message)
                })
                break;
             case 'select':
                cell[state.address].map((message, index) => {
                    allmessdata = [];

                    // console.log(startmesnum)
                    // console.log(endmesnum)

                    // console.log(message);

                    // eslint-disable-next-line no-plusplus
                    for (let i = startmesnum; i < endmesnum + 1; i++) {

                        const linemessdata = message[1 + i].slice(dlccol + 2, dlccol + 2 + 7);
                        allmessdata = allmessdata.concat(linemessdata);
                    }
                    let allmessdatabin = ''

                    allmessdata.join().split(",").forEach(str => {
                        allmessdatabin = hex2bin(str) + allmessdatabin //   reverse the order high -> low
                    })
                    // console.log("databefore select")
                    // console.log(allmessdatabin);
                    if (startnum === 0) {
                        // if (startnum === 0) {
                        allmessdatabin = allmessdatabin.slice(-endnum,);
                    }
                    else {
                        allmessdatabin = allmessdatabin.slice(-endnum, -startnum);
                    }
                    // console.log("dataafter select")
                    // console.log(allmessdatabin);
                    let allmessdatavalue = parseInt(allmessdatabin, 2) * parseFloat(state.gain) + parseFloat(state.offset)
                    allmessdatavalue = allmessdatavalue.toFixed(2);
                    // console.log(allmessdatavalue)
                    resallmessdata.push({
                        time: message[1 + startmesnum][timecol],
                        data: allmessdatavalue,
                    })
                    return (0);

                })
                break;
            default:
                
        }
        // case

    }
    return (resallmessdata);

}

export default selectmultimessagedata