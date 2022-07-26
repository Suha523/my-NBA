const express = require("express");
const app = express();
const path = require("path");
const urllib = require("urllib");
const axios = require("axios");

const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/teams/:teamName", (request, response) => {
  let teamName = request.params.teamName;
  let teamPlayers;

  axios({
    method: "get",
    url: "http://data.nba.net/10s/prod/v1/2018/players.json",
  }).then(function (resp) {
    let allPlayers = resp.data.league.standard;
    teamPlayers = allPlayers.filter(
      (p) => p.teamId.split(" ")[0] === teamToIDs[teamName] && p.isActive
    );
    response.send(teamPlayers);
  });
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Running server on port: ${PORT}`);
});
