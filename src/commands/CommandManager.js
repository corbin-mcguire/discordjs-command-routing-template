import { helloWorld } from "./helloworld.js";

/**
 * Manages the collection of Discord slash commands
 */
export class CommandManager {
  #commands;

  /**
   * Creates a new CommandManager instance
   */
  constructor() {
    this.#commands = new Map();
    this.registerDefaultCommands();
  }

  /**
   * Registers the default commands
   * @private
   */
  registerDefaultCommands() {
    this.registerCommand(helloWorld);
    // Register more commands here
  }

  /**
   * Registers a new command
   * @param {Command} command - The command to register
   */
  registerCommand(command) {
    this.#commands.set(command.name, command);
  }

  /**
   * Gets a command by name
   * @param {string} name - The name of the command
   * @returns {Command|undefined} The command if found, undefined otherwise
   */
  getCommand(name) {
    return this.#commands.get(name);
  }

  /**
   * Gets all registered commands
   * @returns {Command[]} Array of all commands
   */
  getAllCommands() {
    return Array.from(this.#commands.values());
  }

  /**
   * Gets the command configurations for Discord registration
   * @returns {Object[]} Array of command configurations
   */
  getCommandConfigurations() {
    return Array.from(this.#commands.values()).map((command) =>
      command.getCommand()
    );
  }
}

// Create and export a singleton instance
export const commandManager = new CommandManager();

// For backwards compatibility, export the command configurations
export const commandList = commandManager.getCommandConfigurations();
