
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { resolve, isAbsolute } from 'node:path';


export const determinePath = (path) => {
  const currentDirectory = getPathToCurrentDirectory();
  return isAbsolute(path) ?  path : resolve(currentDirectory, path);
}
