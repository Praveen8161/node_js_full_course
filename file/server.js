//All are in Asynchronous !!!! important
// In Terminal "ls" --> shows list of all files
// And "Node FileName" run that file if used ".mjs" file use "Node FileName.mjs"
// console.log(global); //like a window object in Venilla JS 
const os = require("os"); //Like import in Venilla JS
const path = require("path");
const fsPromises = require('node:fs').promises;

const fileOps = async() => {
  try{
    //Read file
    const data = await fsPromises.readFile(path.join(__dirname,"some.txt"), 'utf8')
    console.log(data);

    //Delete File
    await fsPromises.unlink(path.join(__dirname,"SomeOther.txt"));
  }catch(err){
    console.error("Error found" ,err);
  }
}

fileOps();

// //Writing New File
// fs.writeFile(path.join(__dirname,"other.txt"),"Hello",(err) => {
//   if (err) throw err;
//   console.log("write Complete");
//   //In a wrong file name APPEND create a new file
//   fs.appendFile(path.join(__dirname,"other.txt"),"\n\n This is a Append Text",(err) => {
//     if (err) throw err;
//     console.log("append Complete");
//     //Renaming File
//     fs.rename(path.join(__dirname,"other.txt"), path.join(__dirname,"SomeOther.txt"),(err) => {
//       if (err) throw err;
//       console.log("Rename Complete");
//     })
//   })
// })

// //Uncaught Error
// process.on("uncaughtException",(err) => {
//   console.error("The Error found is: ", err);
//   process.exit(1);
// })

