import { getPathToCurrentDirectory, setPathToCurrentDirectory } from "../../storage/pathStorage.js";
import { resolve, isAbsolute } from 'node:path';
import { access } from "node:fs/promises";
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';

const cd = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    logInvalidInputMessage();
    return;
  }

  const [ newPath ] = pathParams;
  const currentPath = getPathToCurrentDirectory();
  let updatedPath = '';

  try { 
    if (isAbsolute(newPath)) {
      updatedPath = newPath;
    } else {
      updatedPath = resolve(currentPath, newPath);
    }

    await access(updatedPath);
    setPathToCurrentDirectory(updatedPath);
  } catch(err) {
    logOperationFailedMessage();
  }
}

export default cd;