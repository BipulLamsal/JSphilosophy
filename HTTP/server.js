const https = require("https");
const http = require("http");
const fs = require("fs");

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Sachin_Tendulkar",
  method: "GET",
};

const request = https.request(options, (res) => {
  let responseBody = "";
//   console.log("Status Code:", res.statusCode);
//   console.log("Response Headers:", res.headers);
  res.on("data", (data) => {
    responseBody += data;
  });

  res.on("end", () => {
    fs.writeFile("demo.html", responseBody, (error) => {
      if (error) {
        console.error("File Write Error:", error);
      } else {
        console.log("File Downloaded Successfully!");
        invokeServer();
      }
    });
    console.log("Response Ended.");
  });
});

request.on("error", (error) => {
  console.error("Request Error:", error);
});

request.end();

const invokeServer = () => {
  const server = http.createServer((req, res) => {
    try {
      const data = fs.readFileSync("demo.html");
      res.writeHead(200, { "Content-Type": "html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error", err);
    }
  });
  server.listen(3005, () => {
    console.log("server running at 3005.");
  });
};
