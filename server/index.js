const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/User");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Get all users
app.get("/", (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.status(400).json(err));
})
app.get("/getUser/:id",(req,res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
  .catch(err => res.status(400).json(err));
})

// Add a new user
app.post("/createUser", async (req, res) => {
    console.log("Received Data:", req.body);
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an existing user
app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id},{
    name: req.body.name, 
    email: req.body.email,
     age: req.body.age})
  .then(users => res.json(users))
  .catch(err => res.status(400).json(err));
});

// Delete a user
app.delete("/deleteUser/:id",(req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id});
    then(res => res.json(res))
  .catch(err => res.status(400).json(err));

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
