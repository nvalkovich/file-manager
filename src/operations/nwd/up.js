import { getPathToCurrentDirectory, setPathToCurrentDirectory } from "../../storage/pathStorage.js";
import { dirname } from 'node:path';

const up = () => {
  const currentDirectory = getPathToCurrentDirectory()
  setPathToCurrentDirectory(dirname(currentDirectory));
}

export default up;