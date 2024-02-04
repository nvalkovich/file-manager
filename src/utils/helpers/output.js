export const logInvalidInputMessage = () => console.log ('Invalid input');

export const logOperationFailedMessage = () => console.log('Operation failed!');

export const logGreetingMessage = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`);
}

export const logFarewellMessage = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

export const logCurrentPathMessage = (path) => {
  console.log(`You are currently in ${path}`);
}
