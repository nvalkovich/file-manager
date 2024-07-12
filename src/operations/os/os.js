import { cpus, arch, EOL, userInfo, homedir } from 'node:os';
import { isValidArgs } from '../../utils/helpers/common.js';
import { logInvalidInputMessage } from '../../utils/helpers/output.js';

const createCpusTableData = (cpus) => {
  return cpus.map((cpu) => ({"Model": cpu.model, "Clock rate": `${cpu.speed / 1000} GHz`}));
}

const os = (args) => {
  if (!isValidArgs(args, 1)) {
    return;
  }

  const [ command ] = args;

  switch(command) {
    case '--cpus':
      const cpusData = cpus();
      const cpusTableData = createCpusTableData(cpusData);
    
      console.log('Overall amount of CPUS:', cpusData.length);
      console.table(cpusTableData);
      break;
    case '--architecture':
      console.log(arch());
      break;
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--username':
      console.log(userInfo().username);
      break;
    case '--homedir':
      console.log(JSON.stringify(homedir()));
      break;
    default: 
      logInvalidInputMessage();
      break;
  }
}

export default os;