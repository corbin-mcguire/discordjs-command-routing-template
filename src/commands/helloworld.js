import { SlashCommandBuilder } from "discord.js";
import { Command } from "../models/Command.js";

const command = new SlashCommandBuilder().setName("helloworld").setDescription("Responds with Hello World!").toJSON();

const commandHandler = (interaction) => {
  interaction.reply("Hello World!");
};

export const helloWorld = new Command("helloworld", command, commandHandler);
