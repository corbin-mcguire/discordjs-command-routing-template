import { commandManager } from "./commands/CommandManager";

export const handleInteractionCreate = (interaction) => {
  if (!interaction.isCommand()) return;

  commandManager.getCommand(interaction.commandName).handle(interaction);
};
