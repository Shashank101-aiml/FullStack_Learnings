const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname,'Myfile.txt');
const content = "Hello World";
fs.writeFileSync(filepath, content)
console.log("Sync file successfully created with content");
const data = fs.readFileSync(filepath,'utf-8');
console.log("Sync file data:", data)
fs.appendFileSync(filepath,"Sync data");
console.log("Sync file is updated suceessfully with new content");
const updatedata = fs.readFileSync(filepath,'utf-8');
console.log("Sync file data:", updatedata);
fs.unlinkSync(filepath);
console.log("Sync file is deleted")