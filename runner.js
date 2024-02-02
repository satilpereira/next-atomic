#!/usr/bin/env node

import { program } from "commander";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from "url";
import ncp from "ncp";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ncpAsync = promisify(ncp);
const execAsync = promisify(exec);

program
  .version("1.0.3")
  .command("create [projectName]")
  .description(
    "Create a new application in the specified directory or the current directory if not provided"
  )
  .action(async (projectName = ".") => {
    const sourcePath = path.join(__dirname, "src");
    const destinationPath = path.join(process.cwd(), projectName);

    console.log(
      `Creating ${
        projectName === "." ? "the current directory" : projectName
      }...`
    );

    // Use ncp to copy the content of the src directory
    try {
      await ncpAsync(sourcePath, destinationPath, {
        clobber: false, // Do not overwrite existing files
        stopOnErr: true, // Stop on the first error encountered
      });

      console.log("Application files copied successfully!");

      // Change the working directory to the destination path
      process.chdir(destinationPath);

      // Run npm install
      console.log("Running npm install...");
      await execAsync("npm install");

      console.log("npm install completed successfully!");
    } catch (error) {
      console.error("Error creating application:", error.message);
    }
  });

program.parse(process.argv);
