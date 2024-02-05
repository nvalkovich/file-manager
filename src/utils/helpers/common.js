import { access, constants } from 'node:fs/promises';
import { logInvalidInputMessage, logOperationFailedMessage } from './output.js';

export const getUserName = () => {
  const argName = '--username';

  const arg = process.argv.find((element) => element.startsWith(argName));

  return arg && arg.includes('=')? arg.slice(arg.indexOf('=') + 1) : 'Username';
}

export const parseInput = (input) => {
  const regExp = /[^\s"]+|"([^"]*)"/gi;
  const parsed = [];

  let match;

  do {
    match = regExp.exec(input.trim());
    if (match) {
      parsed.push(match[1] ? match[1] : match[0]);
    }
  } while (match)

  const [command, ...params] = parsed;
  
  return {
    command,
    params
  }
}

export const logError = (e) => {
  let message;

  switch(e.code) {
    case 'EEXIST':  // if (x === 'value1')
      message = 'file already exists';
      break;
    case 'ENOENT': 
      message = 'no such file or directory';
      break;
    case 'EPERM': 
      message = 'operation not permitted';
      break;
    case 'EINVAL': 
      message = 'invalid argument';
      break;
    case 'EISDIR': 
      message = 'illegal operation on a directory';
      break;
    default:
      message = null;
      break;
  };

  if (message) {
    console.error(`Error: ${message}`);
  } 

  logOperationFailedMessage();
}

export const isFileExist = async (pathToFile) => {
  try {
      await access(pathToFile, constants.F_OK);
      return true;
  } catch (e) {
      if (e.code === 'ENOENT') return false;
      logError(e);
      throw err ();
  }
}


export const isValidArgs = (args, argsNum) => {
  if (args.length !== argsNum) {
    console.error('Error: invalid number of arguments');
    logInvalidInputMessage();
    return false;
  } 

  return true;
}

