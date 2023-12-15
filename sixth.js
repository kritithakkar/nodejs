//Append File
var fs = require('fs');
fs.appendFile("./abc.txt","new content",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("done");
    }
});