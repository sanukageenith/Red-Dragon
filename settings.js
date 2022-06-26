//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `S.G RED DRAGON BOT
My Ownner Is Sanuka Geenith` //Costomize Alive Message (type your message in `` )

global.owner = ['+94727004204'] //Owner number in aive msg
global.premium = ['+94727004204'] //Owner Number info
global.ownernomer = '+94727004204' //Owner Number <<<

global.ownername = 'SANUKA GEENITH' //Owner Name
global.botname = ' S.G RED DRAGON BOT' //Bot Name

global.button = 'Conect owner📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/+94727339111' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'S.G RED DRAGON࿐' //Bot Pacage Name
global.author = 'BY SANUKA GEENITH❯❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://chat.whatsapp.com/IHkKb4LgKkQBuu37pjw4X6' //Github Account!
global.footer = 'S.G DRAGON BOT WA GROUP' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ✅',
    admin: 'ඇඩ්මින්ලට විතරයි මේක භාවිතා කරන්න පුලුවන්',
    botAdmin: 'මට ඇඩ්මින් දෙන්න',
    owner: 'මගෙ Owner ට ව්තරයි මේක භාවිතා කරන්න පුලුවන්',
    group: 'මගෙ ෆීචස් ගෲප් වලට විතරයි',
    private: 'මගෙ ෆීචස් privet chat වලට විතරයි',
    bot: 'ෆීචර්ස් මට විතරයි',
    wait: 'කරුණාකර රැදී සිටින්න...',
    error: 'Error!!! API KEA එක කල්ඉකුත් වෙල!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
