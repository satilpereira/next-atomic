#!/usr/bin/env node

import { program } from "commander";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import ncp from "ncp";
import { exec } from "child_process";
import fs from "fs";
import { Spinner } from "cli-spinner";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ncpAsync = promisify(ncp);
const execAsync = promisify(exec);

program
  .version("1.1.0")
  .command("create [projectName]")
  .description(
    "Create a new application in the specified directory or the current directory if not provided"
  )
  .action(async (projectName = ".") => {
    const sourcePath = path.join(__dirname, "src");
    const destinationPath = path.join(process.cwd(), projectName);

    console.log(chalk.blue(
      `🛈 Creating ${
        projectName === "." ? "the current directory" : projectName
      }...`
    ));

    // Use ncp to copy the content of the src directory
    try {
      await ncpAsync(sourcePath, destinationPath, {
        clobber: false, // Do not overwrite existing files
        stopOnErr: true, // Stop on the first error encountered
      });

      console.log(
        chalk.green(
        "✓ Application files copied successfully!"));

      // Rename .npmignore to .gitignore
      const npmignorePath = path.join(destinationPath, ".npmignore");
      const gitignorePath = path.join(destinationPath, ".gitignore");
      await fs.promises.rename(npmignorePath, gitignorePath);

      // Change the working directory to the destination path
      process.chdir(destinationPath);

      const spinner = new Spinner({
        text: (
          "\x1b[34m" +
          "Installing dependencies, please wait..."),
        onTick: function (msg) {
          this.clearLine(this.stream);
          this.stream.write(msg);
        },
      });
      spinner.setSpinnerString(18);

      // Logs("Installing dependencies, please wait...");
      spinner.start();
      
      // Run npm install
      await execAsync("npm install");

      // Stop the spinner
      spinner.stop(true);

      console.log(chalk.green("✓ Application created successfully!"));
      console.group();
      console.log(chalk.blue.bold("To get started, try running:"));
      
      // If different folder, add folder name to command
      if (projectName !== ".") {
        console.log(chalk.blue.bold(`cd ${projectName}`));
      }
      console.log(chalk.blue.bold("npm run dev"));
      console.groupEnd();
    } catch (error) {
      console.error(chalk.red("⚠️ Error creating application:", error.message));
    }
  });

program.parse(process.argv);
