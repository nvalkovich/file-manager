import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, isAbsolute } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';

const hash = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    logInvalidInputMessage();
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();
  const [ path ] = pathParams;
  const pathToFile = isAbsolute(path) ? path : resolve(currentDirectory, path);

  try {
    const createdHash = createHash('sha256');
    const readableStream = createReadStream(pathToFile);
  
    await pipeline(readableStream, createdHash.setEncoding('hex'), process.stdout, {end: false});
    process.stdout.write('\n');
  } catch {
    logOperationFailedMessage();
  }
};

export default hash;