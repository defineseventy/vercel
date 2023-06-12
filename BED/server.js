// bring the .env over
require('dotenv').config({ path: ".env.development" });

// bring app.js over
const app = require("./controller/app");

// Initialize server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});