const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send('Welcome');
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

//Middleware  To perform something after request or before response.ie, authentication,cookies,sessions...etc
app.use((req,res,next)=>{
  console.log("Login Success")
  next()
})

app.post("/loginaction", (req, res) => {
  const { name, place } = req.body;
  res.send(`
    <h1>Login Successfull</h1>
    <h2>I'm ${name} from ${place}</h2>
    `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
