const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStorage = require("connect-session-knex")(session);
const KnexConnection = require("../data/dbConfig");

const sessionConfiguration = {
  name: "id",
  secret: process.env.SECRET_KEY,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production" ? true : false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStorage({
    knex: KnexConnection,
    clearInterval: 1000 * 60 * 10,
    tablename: "user_sessions",
    sidfieldname: "id",
    createtable: true
  })
};

module.exports = server => {
  server.use(helmet());
  server.use(cors());
  server.use(express.json());
  server.use(session(sessionConfiguration));
};
