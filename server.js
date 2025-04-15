const express = require("express");
const authRoutes = require("./routers/auth");
require("dotenv").config();
const cors = require("cors");

const app = express(); // <- ƏVVƏLCƏ təyin et

app.use(cors());
app.use(express.json()); // <- JSON parse middleware

app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

