const fs = require('fs');

function readFileContent(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            if(err.code === 'ENOENT'){
                console.error("Error reading file: ENOENT: no such file or directory...");
            } else{
                throw err;
            }
            return;
        }
        if(data === ""){ // data.length === 0
            console.log("(empty string)");
            return;
        }
        console.log(data);
    });
}

// ALTERNATE WAY 
// async function readFileContent(filePath){
//     try {
//         const data = await fs.promises.readFile(filePath, 'utf8');  // coz await need promise as response to work (no need in readFileSync)
//         if(data === ""){
//             console.log("(empty string)");
//         }
//         console.log(data);
//     } catch (error) {
//         if(error.code === 'ENOENT'){
//             console.error("Error reading file: ENOENT: no such file or directory...");
//         } else {
//             throw error;
//         }
//     }
// }


readFileContent('test-files/file1.txt');

readFileContent('test-files/empty-file.txt');

readFileContent('test-files/nonexistent-file.txt');