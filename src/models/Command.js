export class Command {
  #command;
  #commandHandler;

  constructor(name, command, commandHandler) {
    this.name = name;
    this.#command = command;
    this.#commandHandler = commandHandler;
  }

  getCommand() {
    return this.#command;
  }

  setCommand(command) {
    this.#command = command;
  }

  getCommandHandler() {
    return this.#commandHandler;
  }

  setCommandHandler(newHandler) {
    this.#commandHandler = newHandler;
  }

  handle(interaction) {
    this.#commandHandler(interaction);
  }
}
