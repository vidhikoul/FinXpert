require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.json());

app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let neworder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  neworder.save();
  res.send("done");
});

app.use("/", authRoute);

app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(uri);
  console.log("DB Connected");
});
