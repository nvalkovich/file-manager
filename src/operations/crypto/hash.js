import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { determinePath } from '../../utils/helpers/path.js';
import { isValidArgs } from '../../utils/helpers/common.js';
import { logOperationFailedMessage } from '../../utils/helpers/output.js';

const hash = async (pathParams) => {
  if (!isValidArgs(pathParams, 1)) {
    return;
  }

  const [ path ] = pathParams;
  const pathToFile = determinePath(path);

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