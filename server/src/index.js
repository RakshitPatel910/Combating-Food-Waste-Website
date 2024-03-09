const express =  require("express");
const bodyParser = require("body-parser")

const {PORT} = require('./config/serverConfig')

const setupandStartServer = async ()=>{
    
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(3000, ()=>{
        console.log(`Server started at 3000`)
    });
}
setupandStartServer();