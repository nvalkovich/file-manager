  
import { createWriteStream, createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve, isAbsolute, basename } from 'node:path';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';

const cp = async (pathParams) => {
  if (pathParams.length !== 2) {
    logInvalidInputMessage();
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [pathToSource, newDirectory] = pathParams;
  const fileName = basename(pathToSource);

  const sourcePath = isAbsolute(pathToSource) ? pathToSource : resolve(currentDirectory, pathToSource)
  const destPath = resolve(currentDirectory, newDirectory, fileName);

  try {
    await writeFile(destPath, '', { flag: 'wx' });

    const readableStream = createReadStream(sourcePath);
    const writeableStream = createWriteStream(destPath);

    await pipeline(readableStream, writeableStream);
  } catch {
    logOperationFailedMessage();
  }
}

export default cp;