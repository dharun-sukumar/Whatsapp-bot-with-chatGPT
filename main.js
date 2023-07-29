const {config} = require("dotenv");
const { OpenAIApi, Configuration } = require("openai");
const {Client, LocalAuth} = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
config()

const  openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API
}))

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        args: ['--no-sandbox'],
        headless: true
    }
});

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('READY');
});


async function gpt(message) {
const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
    });
    return result.data.choices[0].message.content
}

client.on('message', message => {
    console.log(message.body);
    gpt(message.body).then(result => message.reply(result))
})
