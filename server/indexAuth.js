const express = require("express");
const app = express();
const cors = require("cors");
const stytch = require("stytch");
require('dotenv').config();


app.use(cors());
app.use(express.json());

const client = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID,
  secret: process.env.STYTCH_SECRET,
  env: stytch.envs.test,
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const params = {
    email,
    login_magic_link_url: "http://localhost:3000/auth",
    signup_magic_link_url: "http://localhost:3000/auth",
    login_expiration_minutes: 5,
  };

  const response = await client.magicLinks.email.loginOrCreate(params);

  res.json(response);
});

app.post("/auth", async (req, res) => {
  try {
    const token = req.body.token;
    const sessionToken = await client.magicLinks.authenticate(token, {
      session_duration_minutes: 30,
    });
    res.json(sessionToken);
  } catch (err) {
    res.json(err);
  }
});


app.listen(3002, () => {
  console.log("server rodando");
});    