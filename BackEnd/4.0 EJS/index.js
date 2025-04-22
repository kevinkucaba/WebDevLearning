import express from "express";

const app = express();
const port = 3000;
var day = new Date().getDay;

function weekdayOrWeekend(day) {
  return day === ("Saturday" || "Sunday") ? "Weekend" : "Weekday";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { dayType: weekdayOrWeekend(day) });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
