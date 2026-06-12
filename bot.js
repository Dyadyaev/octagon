const TelegramBot = require('node-telegram-bot-api');

const token = '8873635811:AAE9pj87A36E7fifFNaEMPtmsMLWXtgQkmU';

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        'Привет, Октагон!'
    );

});