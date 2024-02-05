import { writeFile } from 'node:fs/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js';
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const add = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ fileName ] = pathParams;
  
  const pathToFile = determinePath(fileName);

  try {
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch {
    logOperationFailedMessage();
  }
}

export default add;