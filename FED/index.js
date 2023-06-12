/*
Name: Leong Mininn Miko
Admission no.: P1935404
Class: DIT/FT/1B/11
 */
const express = require("express");
const app = express();
app.use(express.static('FED'))

app.get("/", (req, res) => {
    res.sendFile("/index.html", { root: __dirname });
});

const PORT = 5001; //We cannot use port 3000 because it has been occupied by our backend.
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});