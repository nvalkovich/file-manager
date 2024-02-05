
import  path, { resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js';
import { copyFile } from '../../utils/helpers/fs.js';
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const cp = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [pathToSource, newDirectory] = pathParams;
  const fileName = path.win32.basename(pathToSource);

  const sourcePath = determinePath(pathToSource);
  const destPath = resolve(currentDirectory, newDirectory, fileName);

  try {
    await copyFile(sourcePath, destPath)
  } catch {
    logOperationFailedMessage();
  }
}

export default cp;