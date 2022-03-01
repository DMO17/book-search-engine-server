const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/googleBooks", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");

    app.listen(PORT, () =>
      console.log(`[INFO] : server running on  http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};

init();
