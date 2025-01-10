import { SlashCommandBuilder } from "discord.js";
import { Command } from "../models/Command.js";
import { commandManager } from "./CommandManager.js";

const command = new SlashCommandBuilder()
  .setName("helloworld")
  .setDescription("Responds with Hello World!")
  .toJSON();

const commandHandler = (interaction) => {
  interaction.reply("Hello World!");
};

commandManager.registerCommand(
  new Command("helloworld", command, commandHandler)
);
