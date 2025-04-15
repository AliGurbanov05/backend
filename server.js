const express = require("express");
const authRoutes = require("./routes/auth");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Burada CORS-u aktiv et
app.use(cors());

app.use(express.json());


const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
