import { createWriteStream, createReadStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs, isFileExist } from '../../utils/helpers/common.js'; 
import { pipeline } from 'node:stream/promises';
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const decompress = async (pathParams) => {
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

    await pipeline(source, createBrotliDecompress(), destination);
  } catch {
    logOperationFailedMessage();
  }
};

export default decompress;