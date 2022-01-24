const express = require("express");
const router = express.Router();

// import dotenv from "dotenv";
const dotenv=require("dotenv");
const { DB } = require("./database");
const Farm = require("./farmModel");

dotenv.config();
DB();
const app = express();

app.use(express.json());

// GET ALL FARMS
router.get("/", async (req, res) => {
  try {
    const farms = await Farm.find();
    res.json(farms);
  } catch (error) {
    res.json(error);
  }
});

// CREATE FARM
router.post("/", async (req, res) => {
  try {
    const newFarm = await Farm.create(req.body);
    res.json(newFarm);
  } catch (error) {
    res.json(error);
  }
});

// GET FARM
router.post("/:id", async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    res.json(farm);
  } catch (error) {
    res.json(error);
  }
});

// UPDATE FARM
router.post("/:id", async (req, res) => {
  try {
    const farm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(farm);
  } catch (error) {
    res.json(error);
  }
});

// DELETE FARM
router.post("/:id", async (req, res) => {
  try {
    await Farm.findByIdAndDelete(req.params.id);
    res.json("deleted");
  } catch (error) {
    res.json(error);
  }
});

// GET MONTHY STATS

app.use("/api/farms", router);

app.listen(5500, () => {
  console.log(`server started`);
});
