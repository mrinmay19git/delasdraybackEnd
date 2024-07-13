const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const databasePath = path.join(__dirname, "newdatabase.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(7000, () =>
      console.log("Server Running at http://localhost:7000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/",async (request, response) => {

    const getStateStatsQuery = `
    SELECT
      *
    FROM
      Employee
    `;
    const stats = await database.all(getStateStatsQuery);
    console.log(stats);
    response.send(stats);
  }
);


app.get("/user",async (request, response) => {

  const getStateStatsQuery = `
  SELECT
    *
  FROM
    Login
  `;
  const stats1 = await database.all(getStateStatsQuery);
  console.log(stats1);
  response.send(stats1);
}
);
module.exports = app;
