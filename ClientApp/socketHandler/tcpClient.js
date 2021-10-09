/**
 * 
 * This  module  deal with the socket connection
 */

const { randomInt } = require('crypto');
const  net = require('net');

module.exports={
    createTCPClient : (id,host,p)=>{
        
        return new Promise((resolve,reject)=>{
            try{
            const  socket =new net.Socket();
           socket.id = "CLI-"+id;
        socket.connect({port:p,host:host},()=>{
        
            socket.on('error',()=>{
                console.log("error from server side");
                process.exit();
                
             });
             
        socket.on('end',()=>{
           console.log("client is closed");
        });
        
        resolve(socket);

        });
        }catch(err){
            reject(e,"Error in creating client");
        }
        });
    }
    
}