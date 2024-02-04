import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';

const cat = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    logInvalidInputMessage();
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [ fileName ] = pathParams;
  
  const pathToFile = resolve(currentDirectory, fileName);

  try {
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch {
    logOperationFailedMessage();
  }
}

export default cat;