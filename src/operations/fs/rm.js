import { unlink } from 'node:fs/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js'; 
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const rm = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ path ] = pathParams;
  
  const pathToFile = determinePath(path);

  try {
    await unlink(pathToFile);
  } catch {
    logOperationFailedMessage();
  }
}

export default rm;