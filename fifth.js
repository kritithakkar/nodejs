const fs = require('fs');
const content = "wow this is text";
fs.writeFile("new_file.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("saved");
  }
});
