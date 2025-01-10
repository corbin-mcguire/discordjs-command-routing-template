/**
 * Represents a Discord slash command with its associated handler
 */
export class Command {
  #command;
  #commandHandler;

  /**
   * Creates a new Command instance
   * @param {string} name - The name of the command
   * @param {Object} command - The command data/configuration object
   * @param {Function} commandHandler - The function that handles the command execution
   */
  constructor(name, command, commandHandler) {
    this.name = name;
    this.#command = command;
    this.#commandHandler = commandHandler;
  }

  /**
   * Gets the command configuration object
   * @returns {Object} The command data/configuration
   */
  getCommand() {
    return this.#command;
  }

  /**
   * Updates the command configuration
   * @param {Object} command - The new command data/configuration
   */
  setCommand(command) {
    this.#command = command;
  }

  /**
   * Gets the command handler function
   * @returns {Function} The command handler
   */
  getCommandHandler() {
    return this.#commandHandler;
  }

  /**
   * Updates the command handler function
   * @param {Function} newHandler - The new command handler function
   */
  setCommandHandler(newHandler) {
    this.#commandHandler = newHandler;
  }

  /**
   * Executes the command handler with the given interaction
   * @param {Interaction} interaction - The Discord interaction object
   */
  handle(interaction) {
    this.#commandHandler(interaction);
  }
}
