import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import { config } from "dotenv";
import { commandList } from "./commands/commands.js";
import { handleInteractionCreate } from "./interactions.js";

config();

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
export const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.TOKEN);

const main = async () => {
  try {
    console.log(new Date(), "Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commandList });

    console.log(new Date(), "Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

main();

client.on("ready", () => {
  console.log(new Date(), `Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  console.log(new Date(), `${interaction.user.tag} used /${interaction.commandName}`);

  handleInteractionCreate(interaction);
});
