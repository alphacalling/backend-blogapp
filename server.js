const express = require("express");
const { MyPort } = require("./config");
const ConnectDB = require("./config/database");
const blog = require("./routes/blogRoutes");

// instance of express 
const app = express();

//middleware parsing
app.use(express.json());

// default route 
app.use("/api/v1", blog);

// port listen 
app.listen(MyPort, () => {
    console.log(`server is live at ${MyPort}`);
});

// database 
ConnectDB();