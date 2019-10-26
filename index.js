const child = require("child_process");
const fs    = require("fs");

const output    = child.execSync(`git log --oneline`).toString("utf-8");
const directory = './pretty';

/**
 * Validate whether Directory exist
 * If does not exist create one.
 */
const validateFileSystem = () => {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
	}
}

/**
 * Write data to Pretty-log.md file
 * 
 * @param {string} content 
 * @param {string} directory 
 */
const writeToFile = (content, directory) => {
	try {
		fs.writeFileSync(`${directory}/pretty-log.md`, content);
		console.log("Pretty File created Successfully !");
	} catch (error) {
		console.log(`Something went wrong : ${error}`);
	}
}

console.log("Execution start...");

validateFileSystem();
writeToFile(output, directory);

console.log("Execution end");
