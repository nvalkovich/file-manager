import  path,{ resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { copyFile, removeFile } from '../../utils/helpers/fs.js';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs } from '../../utils/helpers/common.js';

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
  } catch (e) {
    logError(e);
  }
}

export default mv;