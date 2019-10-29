const fs = require("fs");
var figlet = require("figlet");
const changeLog = require("./public/changeLogGenerator.js");

const directory = "./pretty";

/**
 * Validate whether Directory exist
 * If does not exist create one.
 */
const validateFileSystem = () => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log("\t Pretty folder created.");
  }
};

console.log("--------------------------------------------");
console.log("\t Pretty commit executing...");

validateFileSystem();
changeLog.generateChangeLog(directory);

console.log("\t Execution end.");
console.log("--------------------------------------------");

figlet("Pretty Commits", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
