const mineflayer = require('mineflayer')
const http = require('http');

// Render'ın uyumaması için gereken web sunucusu
http.createServer((req, res) => {
    res.write("Bot Aktif!");
    res.end();
}).listen(10000); // Render genelde 10000 portunu sever

function createBot() {
    const bot = mineflayer.createBot({
        host: 'agalarmclise.falix.gg', 
        port: 24651,
        username: 'Bot_Agalar', 
        version: '1.21.1',
        hideErrors: true
    })

    bot.on('login', () => console.log('✅ Bot sunucuda!'));
    bot.on('spawn', () => {
        setInterval(() => {
            if (bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => bot.setControlState('jump', false), 500);
            }
        }, 15000);
    });
    bot.on('end', () => setTimeout(createBot, 10000));
}
createBot();
