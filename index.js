// Open CSV
// function loadData() {
    const fileInput = document.getElementById('csv');
    const readFile = () => {
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('out').innerHTML = reader.result;
            console.log(reader.result);
            const result = reader.result;
            // console.log(result.split("\n"));
            // const headers = result.slice(0, result.indexOf("\n")).split(",");
            // const rows = result.slice(result.indexOf("\n") + 1).split("\n");
            // console.log(headers);
            // console.log(rows);

            const arrays = result.split("\n"); 
            // console.log(arrays);
            const multiArray = new Array(arrays.length - 1);
            for (var i = 0; i < (arrays.length - 1); i++) {
                // console.log(i);
                const headers = arrays[i].split(",");
                // console.log(headers);
                multiArray[i] = headers;
            //     const headers = arrays[i];
            //     console.log(headers);
            //     const splits = headers.slice(',');
            //     console.log("Split: " + splits);
            }
            console.log(multiArray);

            for (var i = 0; i < (multiArray.length); i++) { 
                // console.log(i);
                console.log(multiArray[i]);
                for (var x = 0; x < (multiArray[i].length); x++) { 
                    // console.log(i, x);
                    // console.log(multiArray[i][x]);
                    var newVal = 0;
                    var iter = 0;
                    if (multiArray[i][x] == "nan") {
                        console.log(i);
                        if (i != 0) {
                            if (multiArray[i-1][x] && multiArray[i-1][x] != "nan") {
                                const adder = parseFloat(multiArray[i-1][x]);
                                // console.log(adder);
                                newVal += adder;
                                iter++;
                            }
                        }
                        
                        if (i != multiArray.length - 1) {
                            if (multiArray[i+1][x] && multiArray[i+1][x] != "nan") {
                                const adder = parseFloat(multiArray[i+1][x]);
                                // console.log(adder);
                                newVal += adder;
                                iter++;
                            }
                        }

                        if (x != 0) {
                            if (multiArray[i][x-1] && multiArray[i][x-1] != "nan") {
                                const adder = parseFloat(multiArray [i][x-1]);
                                // console.log(adder);
                                newVal += adder;
                                iter++;
                            }
                        }
                        
                        if (x != multiArray.length[i] - 1) {
                            if (multiArray[i][x+1] && multiArray[i][x+1] != "nan") {
                                const adder = parseFloat(multiArray[i][x+1]);
                                // console.log(adder);
                                newVal += adder;
                                iter++;
                            }
                        }
                        
                        // console.log(newVal);
                        console.log(newVal / iter);
                        multiArray[i][x] = (newVal / iter).toFixed(6);
                    } 
                    console.log(multiArray);
                }
            } 

            // const rows = result.slice(result.indexOf("\n") + 1).split("\n");
            // console.log(rows);
        }
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput.files[0]);
    };
    fileInput.addEventListener('change', readFile);
// }

// Read CSV values and parse into multidimensional array
// Pass through, if value == nan, then produce 