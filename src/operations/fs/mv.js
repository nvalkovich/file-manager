import  path,{ resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { copyFile, removeFile } from '../../utils/helpers/fs.js';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js';
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const mv = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [pathToSource, newDirectory] = pathParams;
  const fileName = path.win32.basename(pathToSource);

  const sourcePath = determinePath(pathToSource);
  const destPath = resolve(currentDirectory, newDirectory, fileName);

  try {
    await copyFile(sourcePath, destPath);
    await removeFile(sourcePath);
  } catch {
    logOperationFailedMessage();
  }
}

export default mv;