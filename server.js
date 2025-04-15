// const express = require("express");
// const authRoutes = require("./routers/auth");
// require("dotenv").config();
// const app = express();
// const cors = require("cors");

// // Burada CORS-u aktiv et
// app.use(cors());

// app.use(express.json());


// app.use(express.json());

// app.use("/api/auth", authRoutes);

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routers/auth");

const app = express(); // ✅ əvvəlcə bunu yarat!

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // əgər form-data da gəlirsə

// ✅ Routerləri əlavə et
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
