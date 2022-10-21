const express = require("express");
const app = express();
  
app.get("/", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
});
  
const PORT = 8080;
  
app.listen(8080, console.log(`Server started on port ${PORT}`));