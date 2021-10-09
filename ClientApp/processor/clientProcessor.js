const { Console } = require("console");
const readline = require("readline");
const { scheduleDataFeed } = require("../dataPostScheduler/dataFeedScheduler");
const tcpClient = require('../socketHandler/tcpClient');




module.exports={
    /** getting  input from the user and  creating clients with given  number, host and port and scheduling data feed on interval*/
    process:()=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question("Enter The Number  of connection \n", function(connectionCnt) {
            let connections = -1;
            let  timeInSecs = -1;
            try{
                 connections = parseInt(connectionCnt);
            }catch(e){
                console.log("Please enter connections integer Value")
                process.exit();
            }
            rl.question("Enter the interval time in seconds \n", function(timeInterval) {
                try{
                     timeInSecs = parseInt(timeInterval);
                }catch(e){
                    console.log("Please enter Interval Time in  Integer Value")
                    process.exit();
                }   
                if( connections <= 0 || timeInSecs <= 0){
                    console.log("Please enter number of connections and Interval Time must  be greater than 0 ")
                    process.exit();
                }
                rl.question("Enter The Host \n", function(inHost) {
    
                    let host = inHost;
               
                    rl.question("Enter The Port \n", function(inPort) {
                        let  port = null;
                        try{
                        port =  parseInt(inPort);
                        }catch(err){
                            console.log("Please enter valid port");
                        }
                        // iterating and creating  client 
                        for(let i = 0 ; i < connections;i++){
                            tcpClient.createTCPClient(i+1,host,port).then((tcpClient)=>{
                                // This  method will  start polling
                                scheduleDataFeed(tcpClient,timeInSecs);
                            }).catch((err)=>{
                                console.log("Error in creating client",err);
                                process.exit();
                            });
                        }
                   });
               
                 
                });     
               });
               });
               
               
        
        
        rl.on("close", function() {
            console.log("\nBYE BYE !!!");
            
        });
        
    }
}