const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'ustamcserver.falix.gg', 
        port: 27329,
        username: 'Bot_Agalar', 
        version: '1.21.1',
        auth: 'offline' // Çoğu Falix sunucusu için bu gereklidir
    })

    bot.on('login', () => {
        console.log('✅ Bot giriş yaptı!');
    });

    bot.on('spawn', () => {
        console.log('🌍 Bot dünyada doğdu!');
        // Eğer sunucuda şifre varsa buraya şunu ekle:
        // bot.chat('/register sifre123 sifre123');
        // bot.chat('/login sifre123');
    });

    bot.on('kicked', (reason) => console.log('❌ Atıldı: ' + reason));
    bot.on('error', (err) => console.log('⚠️ Hata: ' + err));
    bot.on('end', () => {
        console.log('🔄 Bağlantı kesildi, 10 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 10000);
    });
}

createBot();
