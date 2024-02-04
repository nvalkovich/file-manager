import os from 'node:os';

const username = () => console.log(os.userInfo().username);

export default username;