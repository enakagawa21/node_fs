const fs = require ("fs")


let filePath = "./helloWorld.txt"

let addedTxt = `\nThis is now added to the end of the file.`

fs.appendFile(filePath, addedTxt, (err) => {
if (err){
     console.log(err)
}else{
     console.log("Text added")
}

})