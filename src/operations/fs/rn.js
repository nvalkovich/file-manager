import { rename } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs, isFileExist } from '../../utils/helpers/common.js';

const rn = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const [path, newName] = pathParams;
  const pathToFile = determinePath(path);

  try {
    const destFile = resolve(dirname(pathToFile), newName);

      if (await isFileExist(destFile)) {
        throw new Error;
      }
      
      await rename(pathToFile, destFile);
  } catch (e){
      logError(e);
  }
}

export default rn;
