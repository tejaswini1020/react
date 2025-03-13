require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); // 🔹 Import bcrypt
const productRoutes = require("./routes/productRoutes");

// Initialize Express
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS


// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  
  app.use("/api/products", productRoutes);


// User Schema & Model
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // NOTE: Use bcrypt to hash passwords in production!
});
const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => res.send("Server is running..."));

// Register Route
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔑 Hashed Password:", hashedPassword); // DEBUGGING

    // Save new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  try {
    console.log("🔍 Login attempt with email:", req.body.username);

    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email: username });
    console.log("🔍 User found:", user); // DEBUGGING
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("🔑 Password Match:", isPasswordValid); // DEBUGGING
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
