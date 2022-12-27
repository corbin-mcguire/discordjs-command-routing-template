import { helloWorld } from "./helloworld.js";

export const commands = {
  [helloWorld.name]: helloWorld,
  // more commands here
};

export const commandList = Object.values(commands).map((command) => command.getCommand());
