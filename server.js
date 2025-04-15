const express = require("express");
const authRoutes = require("./routers/auth");
require("dotenv").config();
const app = express();
const cors = require("cors");

// Burada CORS-u aktiv et
app.use(cors());

app.use(express.json());


app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
