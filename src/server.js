const app = require("./app.js");
const db = require('./database.js')
app.listen(3000, () =>{
    console.log('server running in port 300')
    db();
})