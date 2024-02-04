import { rename } from 'node:fs/promises';
import { resolve, isAbsolute } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';
import { isFileExist } from '../../utils/helpers/common.js';

const rn = async (pathParams) => {
  if (pathParams.length !== 2) {
    logInvalidInputMessage();
    return;
  }

  const [path, newName] = pathParams;
  const currentPath = getPathToCurrentDirectory();
  const pathToFile = isAbsolute(path)? path : resolve(currentPath, path);

  try {
    const destFile = resolve(currentPath, newName);
      if (await isFileExist(destFile)) {
        throw new Error;
      }
      
      await rename(pathToFile, destFile);
  } catch {
      logOperationFailedMessage();
  }
}

export default rn;
