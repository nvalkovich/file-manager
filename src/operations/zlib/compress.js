import { createWriteStream, createReadStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';
import { resolve, isAbsolute } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';

const compress = async (pathParams) => {
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
  
    await pipeline(source, createBrotliCompress(), destination);
  } catch {
    logOperationFailedMessage();
  }
};

export default compress;
