export const getUserName = () => {
  const argName = '--username';

  const arg = process.argv.find((element) => element.startsWith(argName));

  return arg && arg.includes('=')? arg.slice(arg.indexOf('=') + 1) : 'Username';
}

export const parseInput = (input) => {
  const splittedInput = input.trim().split(' ');
  const [command, ...params] = splittedInput;
  
  return {
    command,
    params
  }
}