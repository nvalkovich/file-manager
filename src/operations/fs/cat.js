import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { logError, isValidArgs } from '../../utils/helpers/common.js'; 

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
  } catch (e) {
    logError(e);
  }
}

export default cat;