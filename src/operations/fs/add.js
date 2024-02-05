import { writeFile } from 'node:fs/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs } from '../../utils/helpers/common.js'; 

const add = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ fileName ] = pathParams;
  
  const pathToFile = determinePath(fileName);

  try {
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch (e) {
    logError(e);
  }
}

export default add;