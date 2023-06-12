// bring app.js over
const app = require("./controller/app");

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});