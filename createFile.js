const fs = require("fs")

let mssg = "Hello World!"
let filePath = "./helloWorld.txt"


fs.writeFile(filePath, mssg, (err) => {
  if (err) {
    console.log(err)
   } else{
  console.log(`Created ${filePath} file`)
}
})