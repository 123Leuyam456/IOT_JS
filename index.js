import ip from "ip";
import router from "./routes/start";


const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const ipAddr = ip.address();

let lastHouseVisited = "Gryffondor"


app.use(cors());

app.use(express.json());
app.use(router)

app.get("/", (req, res) => {
    res.json({message : lastHouseVisited})
})

app.post("/", (req,res) => {
    lastHouseVisited=req.body.house;
    res.json({message:lastHouseVisited})
    
})


const initializeApp = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("Server run :" + ipAddr)
  });
};

initializeApp();
