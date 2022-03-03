const {application} = require("express")
const express = require("express")
const app = express()
const router = express.Router();
const port = 3001

app.get('/', (req, res) => {
  res.send("CodeDeploy Assignment Changes!");
})

app.get("/status", (req,res) => {
  res.send("OK");
})

app.listen(port, () => {
  console.log(`Example app listening at htttp://localhost: ${port}`)
});