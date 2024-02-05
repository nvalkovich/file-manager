import { homedir } from 'node:os';

let pathToCurrentDirectory = homedir();

export const getPathToCurrentDirectory = () => pathToCurrentDirectory;

export const setPathToCurrentDirectory = (newPath) => {
  pathToCurrentDirectory = newPath;
}