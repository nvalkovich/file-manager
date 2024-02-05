import { createWriteStream, createReadStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs } from '../../utils/helpers/common.js'; 
import { pipeline } from 'node:stream/promises';

const decompress = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const [pathToSource, pathToDestination] = pathParams;

  const pathToSourceFile = determinePath(pathToSource);
  const pathToDestinationFile = determinePath(pathToDestination);

  try {
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestinationFile);
  
    await pipeline(source, createBrotliDecompress(), destination);
  } catch (e) {
    logError(e);
  }
};

export default decompress;