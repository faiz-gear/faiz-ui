/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

const filePath = './src/index.ts'; // Updated file path
const backupFilePath = filePath + '.backup.ts'; // Backup file

function main() {
    // Generate the components meta data
    try {
        // Restore the original file from the backup
        fs.copyFile(backupFilePath, filePath, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('The original file has been restored.');

            // Delete the backup file
            fs.unlink(backupFilePath, (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('The backup file has been deleted.');
            });
        });

    } catch (error) {
        console.error(chalk.red(`Generate the components Error: ${error}`))
    }
}

main()
