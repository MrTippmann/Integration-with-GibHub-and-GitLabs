const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
var app = express();
app.use(express.json());
var bodyParser = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json();
const port = process.env.PORT || 8080;
//const router = express.Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Using helmet
app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

// API to get GitHub user deatils
app.get("/api/github-users/:username", async function (req, res) {
  const username = req.params.username;

  const url = "https://api.github.com/users/" + username;
  const options = {
    method: "GET",
  };
  console.log(url);
  // promise syntax
  fetch(url, options).then((res) => res.json());
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// API to get GitHub User Repos
app.get("/api/github-users/:username/repos", async function (req, res) {
  const username = req.params.username;

  const url = `https://api.github.com/users/${username}/repos`;
  const options = {
    method: "GET",
  };
  console.log(url);
  // promise syntax
  fetch(url, options).then((res) => res.json());
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// API to get GitLab user deatils
app.get("/api/gitlab-users/:username", async function (req, res) {
  const username = req.params.username;

  const url = `https://gitlab.com/api/v4/users?username=${username}`;
  const options = {
    method: "GET",
  };
  console.log(url);
  // promise syntax
  fetch(url, options).then((res) => res.json());
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// API to get single GitLab user deatils
app.get("/api/gitlab-single-user/:id", async function (req, res) {
  const id = req.params.id;

  const url = `https://gitlab.com/api/v4/users/${id}`;
  const options = {
    method: "GET",
  };
  console.log(url);
  // promise syntax
  fetch(url, options).then((res) => res.json());
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// API to get GitLab user's projects
app.get("/api/gitlab-users/:username/projects", async function (req, res) {
  const username = req.params.username;

  const url = `https://gitlab.com/api/v4/users/${username}/projects`;
  const options = {
    method: "GET",
  };
  console.log(url);
  // promise syntax
  fetch(url, options).then((res) => res.json());
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// Notifies the user that the server is listening
app.listen(port, () => console.log("Listening engaged")); 

