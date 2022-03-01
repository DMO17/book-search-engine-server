const mongoose = require("mongoose");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/googleBooks", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};

init();
