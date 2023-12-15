//reading file
const { error } = require("console");
const fs = require("fs");
fs.readFile("./abc.txt", (error, data) => {
  if (error) {
    console.log("error");
  } else {
    console.log(data.toString());
  }
});
