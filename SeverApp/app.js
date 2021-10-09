const net = require('net');
const readline = require("readline");

const server = net.createServer(connection =>{
    console.log(connection);
    connection.on("data",data =>{
        let  startTime = new Date().toTimeString();
        console.log(JSON.stringify({time:startTime,message:data.toString()}));
    });
    connection.on("error",data =>{
      
    })
});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

    
});

let host = "";
let  port = "";
rl.question("Enter The Host \n", function(inHost) {
    
     host = inHost;

     rl.question("Enter The Port \n", function(inPort) {
         port = parseInt(inPort);
         try{
    server.listen(port,host,()=>{
        console.log("waiting ");
    });
}
    catch(err){
        console.log("Please enter the valid host  / port");

    }
     
});
});
