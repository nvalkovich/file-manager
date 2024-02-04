import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { getPathToCurrentDirectory } from '../../storage/pathStorage.js';
import { pipeline } from 'node:stream/promises';

const cat = async (pathParams) => {
  if (pathParams.length > 1 || typeof pathParams[0] !== 'string') {
    console.error('Invalid input');
    return;
  }

  const [ pathToFile ] = pathParams;
  
  try {
    const currentDirectory = getPathToCurrentDirectory();
    const readableStream = createReadStream(resolve(currentDirectory, pathToFile));
    await pipeline(readableStream, process.stdout, {end: false});
    process.stdout.write('\n');
  } catch {
    console.error('Operation failed!');
  }
}

export default cat;