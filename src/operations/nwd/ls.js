import { readdir } from 'node:fs/promises';
import { getPathToCurrentDirectory } from "../../storage/pathStorage.js";
import { logError } from '../../utils/helpers/common.js';

const directoryContentTypes = {
  'directory': 'directory',
  'file': 'file',
}

const createContentTableData = (files, type) => {
  return files.map((file) => file.name).sort().map((file) => ({"Name": file, "Type": type}));
}

const ls = async () => {
  const currentPath = getPathToCurrentDirectory();

  try {
    const directoryContent = await readdir(currentPath, {withFileTypes: true});

    const directories = directoryContent.filter((file) => file.isDirectory());
    const directoriesTableData = createContentTableData(directories, directoryContentTypes.directory);

    const files = directoryContent.filter((file) => file.isFile());
    const filesTableData = createContentTableData(files, directoryContentTypes.file);

    console.table(directoriesTableData.concat(filesTableData));
  } catch (e) {
    logError(e);
  }
}

export default ls;