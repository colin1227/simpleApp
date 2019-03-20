console.log("starting up...")
const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
      message: "HEY!"
  })
})

app.listen(port, () => {
   console.log("good to go!")
})