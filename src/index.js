
import readline from 'node:readline/promises';
import {
  stdin as input,
  stdout as output,
} from 'node:process';

import { getUserName, parseInput } from './utils/helpers/common.js';
import { logGreetingMessage, logCurrentPathMessage, logInvalidInputMessage, logFarewellMessage } from './utils/helpers/output.js';

import { getPathToCurrentDirectory } from './storage/pathStorage.js';
import operationsList from './operations/operationsList.js';

const exitCommand = '.exit';

const username = getUserName();

const rl = readline.createInterface({ input, output });

logGreetingMessage(username);
logCurrentPathMessage(getPathToCurrentDirectory());

rl.on('line', async (input) => {
  if (input === exitCommand) {
    rl.close();
  } else {
      const parsed = input.startsWith('os ') 
      ? parseInput(input.slice(input.lastIndexOf('-') + 1)) 
      : parseInput(input);

      const {command, params} = parsed;
      const operation = operationsList[command];

      if (!operation) {
        logInvalidInputMessage();
        return;
      }
      
      await operation(params);
      logCurrentPathMessage(getPathToCurrentDirectory());
    }
});

rl.on('close', () => {
  logFarewellMessage(username);
})