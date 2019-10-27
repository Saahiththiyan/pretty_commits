const fs        = require("fs");
const changeLog = require("./public/changeLogGenerator.js");

const directory = './pretty';

/**
 * Validate whether Directory exist
 * If does not exist create one.
 */
const validateFileSystem = () => {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
		console.log('\t Pretty folder created.');
	}
}

console.log("--------------------------------------------");
console.log("\t Pretty commit executing...");

validateFileSystem();
changeLog.generateChangeLog(directory);

console.log("\t Execution end.");
console.log("--------------------------------------------");

