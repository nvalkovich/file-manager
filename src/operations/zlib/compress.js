import { createWriteStream, createReadStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs, isFileExist } from '../../utils/helpers/common.js';
import { pipeline } from 'node:stream/promises';

const compress = async (pathParams) => {
  if (!isValidArgs(pathParams, 2)) {
    return;
  }

  const [pathToSource, pathToDestination] = pathParams;

  const pathToSourceFile = determinePath(pathToSource);
  const pathToDestinationFile = determinePath(pathToDestination);

  try {
    if (await isFileExist(pathToDestinationFile)) {
      throw new Error;
    }
    
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestinationFile);

    await pipeline(source, createBrotliCompress(), destination);
  } catch (e) {
    logError(e);
  }
};

export default compress;
