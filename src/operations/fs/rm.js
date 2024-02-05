import { unlink } from 'node:fs/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs } from '../../utils/helpers/common.js'; 

const rm = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ path ] = pathParams;
  
  const pathToFile = determinePath(path);

  try {
    await unlink(pathToFile);
  } catch (e) {
    logError(e);
  }
}

export default rm;