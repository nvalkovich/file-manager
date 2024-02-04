import { getPathToCurrentDirectory, setPathToCurrentDirectory } from "../../storage/pathStorage.js";
import { resolve, isAbsolute } from 'node:path';
import { access } from "node:fs/promises";

const cd = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    console.error('Invalid input');
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
  } catch {
    throw new Error ('Operation failed!');
  }
}

export default cd;