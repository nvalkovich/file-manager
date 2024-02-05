
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
rl.prompt();

rl.on('line', async (input) => {
  if (input === exitCommand) {
    rl.close();
  } else {
      const parsed = parseInput(input);
      const {command, params} = parsed;

      const operation = operationsList[command];

      if (!operation) {
        logInvalidInputMessage();
        logCurrentPathMessage(getPathToCurrentDirectory());
        rl.prompt();
        return;
      }
      
      await operation(params);
      logCurrentPathMessage(getPathToCurrentDirectory());
      rl.prompt();
    }
});

rl.on('close', () => {
  logFarewellMessage(username);
})