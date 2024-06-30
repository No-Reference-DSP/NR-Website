const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors()); // lets app accept requests from the front-end


app.get("/api/home", (req,res) => {
    res.json({messages: "hello world"});
})

app.listen(PORT, () => {
    console.log(`Sever started on port ${PORT}`);
});