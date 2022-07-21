const http = require("http");
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
   'Access-Control-Max-Age': 2592000,
  'Content-Type': 'application/json', // 30 days
  /** add other headers as per requirement */
};


// const path = require("path");
// const fs = require("fs");
// const file = require("./fileEditor.js");
const userInfo = require("./Config/person.json");

//Define the port that you need.
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/user") {
    
    res.writeHead(200,headers)
    res.end(JSON.stringify(userInfo));
    console.log("someone has conected Nico nico niiii")
  }
});

server.listen(PORT, console.log(`Server started at port ${PORT}`));

    