import nwd from './nwd/index.js';
import fs from './fs/index.js';
import os from './os/index.js';
import crypto from './crypto/index.js'

const { up, cd, ls } = nwd;
const { cat, add, rn, cp, rm, mv } = fs;
const { EOL, cpus, homedir, username, architecture } = os;
const { hash } = crypto;

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
    "homedir": homedir,
    "username": username,
    "architecture": architecture,
    "hash": hash,
}

export default operationsList;