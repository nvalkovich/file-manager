import { createWriteStream, createReadStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';
import { resolve, isAbsolute } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';

const decompress = async (pathParams) => {
  if (pathParams.length !== 2) {
    logInvalidInputMessage();
    return;
  }

  const [pathToSource, pathToDestination] = pathParams;

  const currentDirectory = getPathToCurrentDirectory();

  const pathToSourceFile = isAbsolute(pathToSource) ?  pathToSource : resolve(currentDirectory, pathToSource);
  const pathToDestinationFile = isAbsolute(pathToDestination) ?  pathToDestination : resolve(currentDirectory, pathToDestination);

  try {
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestinationFile);
  
    await pipeline(source, createBrotliDecompress(), destination);
  } catch {
    logOperationFailedMessage();
  }
};

export default decompress;