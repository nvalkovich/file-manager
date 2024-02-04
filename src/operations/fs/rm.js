import { unlink } from 'node:fs/promises';
import { resolve, isAbsolute } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';

const rm = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    logInvalidInputMessage();
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [ path ] = pathParams;
  
  const pathToFile = isAbsolute(path) ? path : resolve(currentDirectory, path);

  try {
    await unlink(pathToFile);
  } catch {
    logOperationFailedMessage();
  }
}

export default rm;