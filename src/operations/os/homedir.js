import os from 'node:os';

const homedir = () => console.log(JSON.stringify(os.homedir())); 
  
export default homedir;