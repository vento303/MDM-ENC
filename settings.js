const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'isi sendiri'
global.apikey = 'isi sendiri'
global.capikey = 'isi sendiri'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6287842991690','6287842991690'] //ur owner number
global.ownernomer = "6287842991690" //ur owner number2
global.ownername = "𝙳𝙰𝚁𝚆𝙸𝙽 ✆" //ur owner name
global.ytname = "@YTKyuuTense" //ur yt chanel name
global.socialm = "jgn spam owner njg" //ur github or insta name
global.location = "Sulawesi Selatan, Indonesia " //ur location

//new
global.botname = "𝙳𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿"
global.ownernumber = '6287842991690'
global.ownername = '6287842991690'
global.ownerNumber = ["6287842991690@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@BG-DARWIN"
global.websitex = "https://Bakso kontol"
global.wagc = "https://chat.whatsapp.com/C3YkZzw71SdAZSGMnJxnGR"
global.themeemoji = '🚩'
global.wm = "𝚆𝙸𝙽 ✆"
global.wmbot = "𝙱𝚈 𝚆𝙸𝙽𝙽"
global.botscript = '_Cek YT_\n   _Youtube.com/@BG-DARWIN_' //script link
global.packname = "𝚆𝙸𝙽𝚃𝙷𝙴𝙱𝙾𝚃 𝚆𝙰𝙽𝙶𝚂𝙰𝙵"
global.author = "𝚆𝙸𝙽𝚃𝙷𝙴𝙱𝙾𝚃 𝚆𝙰𝙽𝙶𝚂𝙰𝙵"
global.creator = "6287842991690@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Panel Pterodactyl"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})