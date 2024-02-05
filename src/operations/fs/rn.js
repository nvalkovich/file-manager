import { rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs, isFileExist } from '../../utils/helpers/common.js';

const rn = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const [path, newName] = pathParams;
  const currentPath = getPathToCurrentDirectory();
  const pathToFile = determinePath(path);

  try {
    const destFile = resolve(currentPath, newName);
      if (await isFileExist(destFile)) {
        throw new Error;
      }
      
      await rename(pathToFile, destFile);
  } catch (e){
      logError(e);
  }
}

export default rn;
