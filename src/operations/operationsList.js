import nwd from './nwd/index.js';
import fs from './fs/index.js';

const { up, cd, ls } = nwd;
const { cat } = fs;

const operationsList = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
}

export default operationsList;