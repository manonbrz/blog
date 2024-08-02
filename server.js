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

// Configuration pour servir les fichiers statiques
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes spécifiques pour les pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/propos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'propos.html'));
});

app.get('/article', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'article.html'));
});

app.get('/entreprise', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'entreprise.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

// Route pour recevoir les données du formulaire
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.redirect('/contact?error=invalid_request');
    }

    try {
        const channel = await client.channels.fetch(CHANNEL_ID);
        if (channel) {
            await channel.send(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);
            return res.redirect('/contact?success=true');
        } else {
            return res.redirect('/contact?error=channel_not_found');
        }
    } catch (error) {
        console.error('Failed to send message:', error);
        return res.redirect('/contact?error=email_failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
