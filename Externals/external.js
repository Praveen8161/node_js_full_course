const fs = require("fs");
const os = require("os");

//when Hosting a backend Node USE
const port = process.env.PORT || 9000 ;

//In Package.JSON File
// "start":"node index.js" --> it is used in Production it keeps the application running untill it Closes or Crashes
// "start":"nodemon index.js" --> it is used in Development it restarts every time the code changes
// ----> Read Package.JSON for reference

// console.log(process.argv);
// function calculate(num1,num2,oper){
//     if(oper === "add") return +num1 + +num2;
//     if(oper === "sub") return num1 - num2;
//     if(oper === "mul") return num1 * num2;
//     if(oper === "div") return num1 / num2;
//     return "need correct opration name";
// }
// //Read File
// fs.readFile("sample.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error: " , err);
//     }else{
//         console.log(data);
//     }
// });
// //Write File
// const content = "This is a newly created in node JS"
// fs.writeFile("./node.txt",content,(err,data)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("Written Succesfully");
//     }
// });

//reading file from argv
// const [,,configPath] = process.argv;
// fs.readFile(configPath,"utf-8",(err,data)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log(data);
//         let obj = JSON.parse(data);
//         console.log(obj[0].port);
//     }
// })

//OS Info
// console.log("Total Memory: ", os.totalmem());
// console.log("Free Memory: ", os.freemem());
// console.log("Version: ", os.version());
// console.log("CPU Status: ", os.cpus());

//Date
let time = Date.now();
console.log("Timeeee: ",time);
let date = new Date();
console.log("Date: ",date.getDate());
console.log("Today: ",date.toUTCString().slice(0,17));