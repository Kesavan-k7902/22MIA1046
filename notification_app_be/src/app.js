const express = require("express");

const logger = require("./middleware/logger");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});