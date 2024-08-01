require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

client.login(DISCORD_TOKEN);

client.once('ready', () => {
    console.log('Bot is online!');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques à partir du répertoire 'pages'
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'assets')));

// Route pour recevoir les données du formulaire
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.redirect('/contact.html?error=invalid_request');
    }

    try {
        const channel = await client.channels.fetch(CHANNEL_ID);
        if (channel) {
            await channel.send(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);
            return res.redirect('/contact.html?success=true');
        } else {
            return res.redirect('/contact.html?error=channel_not_found');
        }
    } catch (error) {
        console.error('Failed to send message:', error);
        return res.redirect('/contact.html?error=email_failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
