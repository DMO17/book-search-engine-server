const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const init = () => {
  try {
    app.listen(PORT, () => {
      console.log(`navigate to http://localhost:${PORT}`);
    });
  } catch (error) {}
};

init();
