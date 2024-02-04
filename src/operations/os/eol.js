import os from 'node:os';

const EOL = () => console.log(JSON.stringify(os.EOL)); 
  
export default EOL;