import nwd from './nwd/index.js';
import fs from './fs/index.js';

const { up, cd, ls } = nwd;
const { cat, add } = fs;

const operationsList = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
}

export default operationsList;