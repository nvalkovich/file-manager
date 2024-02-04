
import readline from 'node:readline/promises';
import {
  stdin as input,
  stdout as output,
} from 'node:process';

import { getUserName, parseInput } from './utils/helpers.js'
import { getPathToCurrentDirectory } from './storage/pathStorage.js';
import operationsList from './operations/operationsList.js';

const username = getUserName();

const rl = readline.createInterface({ input, output });

let pathToWorkingDirectory = getPathToCurrentDirectory(); 

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${pathToWorkingDirectory}`);

rl.on('line', async (input) => {
  if (input === '.exit') {
    rl.close();
  } else {
      const parsed = parseInput(input);
      const {command, params} = parsed;
      const operation = operationsList[command];

      if (!operation) {
        console.error('Invalid input');
        return;
      }
      
      await operation(params);
      console.log(`You are currently in ${getPathToCurrentDirectory()}`);
    }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
})