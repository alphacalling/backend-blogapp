const express = require("express");
const { MyPort } = require("./config");
const ConnectDB = require("./config/database");

const app = express();

//middleware parsing
app.use(express.json());

app.use("/api/v1", blog);

app.listen(MyPort, () => {
    console.log(`server is live at ${MyPort}`);
});

ConnectDB();