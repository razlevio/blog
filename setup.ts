// setup.ts
const { exec } = require("child_process")
const util = require("util")

const execAsync = util.promisify(exec)

async function updateDependencies() {
	console.log("Updating dependencies to their latest versions...")

	try {
		// Install base dependencies and npm-check-updates
		await execAsync("npm install && npm install -g npm-check-updates ts-node")

		// Run npm-check-updates with -u to update package.json
		await execAsync("ncu -u")

		// Install updated dependencies
		await execAsync("npm install")

		// Install and configure husky
		await execAsync("npm install -D husky")
		await execAsync("npx husky-init && npm install")
		await execAsync(
			'jq \'.scripts.test = "echo "No tests specified" && exit 0"\' package.json > temp.json && mv temp.json package.json'
		)
		await execAsync(
			"npx husky add .husky/commit-msg 'npx commitlint --edit \"$1\"'"
		)
		await execAsync(
			"npx husky add .husky/pre-commit 'npx lint-staged --concurrent false'"
		)

		console.log("Dependencies successfully updated.")
	} catch (error) {
		console.error("Failed to update dependencies:", error)
	}
}

updateDependencies()
