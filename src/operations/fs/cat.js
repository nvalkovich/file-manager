import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js'; 
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const cat = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ path ] = pathParams;
  const pathToFile = determinePath(path);
  
  try {
    const readableStream = createReadStream(pathToFile);
    await pipeline(readableStream, process.stdout, {end: false});
    process.stdout.write('\n');
  } catch {
    logOperationFailedMessage();
  }
}

export default cat;