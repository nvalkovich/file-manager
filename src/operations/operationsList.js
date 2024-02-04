import nwd from './nwd/index.js';
import fs from './fs/index.js';
import os from './os/index.js';

const { up, cd, ls } = nwd;
const { cat, add, rn, cp, rm, mv } = fs;
const { EOL, cpus } = os;

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
    "EOL": EOL,
    "cpus": cpus,
}

export default operationsList;