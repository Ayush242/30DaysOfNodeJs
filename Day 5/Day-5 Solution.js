const { log } = require('console');
const path  = require('path');

function checkFileExtension(filePath, expectedExtension) {
    const extensionName = path.extname(filePath); 

    if(extensionName === expectedExtension){
        console.log(`File has the expected extension: ${extensionName}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${extensionName}`);
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png