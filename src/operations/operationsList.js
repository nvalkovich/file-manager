import nwd from './nwd/index.js';
import fs from './fs/index.js';
import os from './os/os.js';
import hash from './crypto/hash.js';
import zlib from './zlib/index.js';

const { up, cd, ls } = nwd;
const { cat, add, rn, cp, rm, mv } = fs;
const { compress, decompress } = zlib;

const operationsList = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
    "rn": rn,
    "cp": cp,
    "rm": rm,
    "mv": mv,
    "os": os,
    "hash": hash,
    "compress": compress,
    "decompress": decompress,
}

export default operationsList;