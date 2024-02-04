import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';
import { logInvalidInputMessage, logOperationFailedMessage } from '../../utils/helpers/output.js';

const cat = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    logInvalidInputMessage();
    return;
  }

  const currentDirectory = getPathToCurrentDirectory();

  const [ pathToFile ] = pathParams;
  
  try {
    const readableStream = createReadStream(resolve(currentDirectory, pathToFile));
    await pipeline(readableStream, process.stdout, {end: false});
    process.stdout.write('\n');
  } catch {
    logOperationFailedMessage();
  }
}

export default cat;