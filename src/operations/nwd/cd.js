import { setPathToCurrentDirectory } from "../../storage/pathStorage.js";
import { sep, join } from 'node:path';
import { access, stat } from "node:fs/promises";
import { determinePath } from "../../utils/helpers/path.js";
import { isValidArgs } from '../../utils/helpers/common.js';
import { logOperationFailedMessage } from "../../utils/helpers/output.js";


const cd = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }
  
  let [ newPath ] = pathParams;
  
  if (newPath.includes(':') && (!newPath.includes(sep))) {
    newPath = join(newPath, sep);
  }

  try { 
    const updatedPath = determinePath(newPath);

    await access(updatedPath);

    const stats = await stat(updatedPath);
    if (stats.isDirectory()) {
      setPathToCurrentDirectory(updatedPath);
    } else {
      console.error('Error: not a directory');
      throw new Error();
    }
  } catch {
    logOperationFailedMessage();
  }
}

export default cd;