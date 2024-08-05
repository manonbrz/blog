require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

client.login(DISCORD_TOKEN);

client.once('ready', () => {
  console.log('Bot is online!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Invalid request');
  }

  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel) {
      await channel.send(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);
      return res.status(200).send('Message sent');
    } else {
      return res.status(404).send('Channel not found');
    }
  } catch (error) {
    console.error('Failed to send message:', error);
    return res.status(500).send('Internal server error');
  }
});

module.exports = app;
