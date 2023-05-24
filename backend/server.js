const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      { firstName: "Tiaan", lastName: "de Beer" },
      { firstName: "Yvan", lastName: "Greyling" },
    ],
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
