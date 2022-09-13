var TOKEN = 'XXX';
var USER_ID = 'YYY';

const TelegramBot = require('telegram-bot-api')

exports.handler = async (event, context) => {
  const bot = new TelegramBot({token: TOKEN, polling: true});
  bot.getMe()
    .then(console.log)
    .catch(console.err);
  bot.sendMessage({chat_id: USER_ID, text: 'Test message'});
  return true;
}
