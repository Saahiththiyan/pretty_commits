const child = require("child_process");
const fs = require("fs");

const output = child.execSync(`git log`).toString("utf-8");

fs.writeFileSync("./temp/test.md", output, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
