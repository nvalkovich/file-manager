import { writeFile } from 'node:fs/promises';
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { unlink } from 'node:fs/promises';

export const createEmptyFile = async (path) => {
  await writeFile(path, '', { flag: 'wx' });
}

export const removeFile = async (path) => {
  await unlink(path);
}

export const copyFile = async (sourcePath, destPath) => {
  await createEmptyFile(destPath);

  const readableStream = createReadStream(sourcePath);
  const writeableStream = createWriteStream(destPath);

  await pipeline(readableStream, writeableStream);
}