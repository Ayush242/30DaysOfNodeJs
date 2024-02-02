const fs = require('fs');

function writeToFile(filePath, content){
    // asynchronous way
    fs.writeFile(filePath, content , (err) =>{
        if(err) {
            console.log("Error writing to file: ENOENT: no such file or directory...");
            return;
        }
        const fileName = filePath.split('/')[1];
        console.log(`Data written to ${fileName}`);
    })


    // synchronous way
    // try{
    //     fs.writeFileSync(filePath, content);
    //     const fileName = filePath.split('/')[1];
    //     console.log(`Data written to ${fileName}`);
    // } catch(err){
    //     console.error("Error writing to file: ENOENT: no such file or directory...");
    // }
}

writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');