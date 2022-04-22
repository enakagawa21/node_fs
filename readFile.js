const fs = require ("fs")


let filePath = "./helloWorld.txt"

fs.readFile(filePath, (err, content)=>{
if (err){
     console.error(err)}
     else{
          console.log(content.toString())
     }
})