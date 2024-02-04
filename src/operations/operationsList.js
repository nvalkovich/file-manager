import nwd from './nwd/index.js';

const { up, cd, ls } = nwd;

const operationsList = {
    "up": up,
    "cd": cd,
    "ls": ls,
}

export default operationsList;