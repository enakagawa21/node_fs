const fs = require ("fs")
let filePath = "./helloWorld.txt"

fs.unlink(filePath, (err) => {
if (err){
     console.error(err)
}else{
     console.log ("Files has been deleted")
}

})