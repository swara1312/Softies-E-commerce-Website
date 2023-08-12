require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");
require("./database/conn")
const Products = require("./models/productSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = 8005;

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser(""));
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

DefaultData();