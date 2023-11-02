const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "0712155147"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'em5092002@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '0712155147' 
global.devs = '0712155147';
global.website = 'https://github.com/memelord050/XLICON-MD' //wa.me/+254712155147
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05FMVRwQk5CR3dEM1JUZytuS3FwaVpDc1B1Tlh3UW1iam9xdXF4b0pYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGRKNEd5UUx6MEg1R05rWjZDOWdoS0RXMzlvRGlWcFkzbnBTYkJMQ3ZSZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQlNQckF1Uld6VWVkV2h2emlLQXhQaGJKVXZBTlo5dTY3OFNQbDZ2TFdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TnlxTVhaZlBnOW5rVmRHczhyZTBTV2MwbXlkVlN6YS94d25LTzUrQ2dJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOS0JFRFd6MGNQWncwSjZ0eGlZK3N0bUxzbGN5WVZWdWpCRmtSOUVqMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0V2JBamVXSWczd1hLcUt6MmRhSWs4Y1p2dzU1R3NBR3dEbzBpbElIQjg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ2Iwc3F1cXJ6cFJBMDFVM0Y1SGxBdndiVndQQ0czOXhUQ3B4bVl6OTJvQlFZSVY1VWlnZTlUSnh6MUNMY2QyeE4yVFo2MW1Oa01oV2lpbm5xWWZEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjc0LCJhZHZTZWNyZXRLZXkiOiI2KzhnNkRFUDlXYXJaelhxL01nQWpjMjVhK24vKzBsR3VkZm5qUXFhNjhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBUTJKeGhFVlR5bW5xSTJtTHFkdjVRIiwicGhvbmVJZCI6IjYyYzM1ZTk2LWYzM2ItNGQyOS04MzdlLTEzMzMxNDY3Njk0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZW5KOTJydXlQbkxjN3kwS1FUUEx4dkVIcGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KWnVJTWV6R0txMGZEUVNVTkxWNS8rdG9XWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t6VHUrSUZFTmVmamFvR0dIUT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieEFyNmQ1Q0ZBNHprcnFBNksyVGVCOTdOTkZzZDdPdzdmcEJOVmNnMVJoRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHVTL1NmYk5ZTHN5eWlRY29MTjlkY280RmlpVnVadlBGeGpRRU40dW9kakRCM25XRENMTGRJdGFrSnFFV3M2WXNKazcvWnZDeklVZEt2N21XQ0ZiQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ims3V2p5QmV3eHZ1cFdSbmYybitObWVBQlkrWVo1STVDTEx1aXh3ZlJPb3VhOGpVc3R1UWNBWWozVnNYdnp4cFR4V2J5TWM5RUlNY2pNZFdIL1ZoQ0FBPT0ifSwibWUiOnsiaWQiOiIyNTQ3MTIxNTUxNDc6NzlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzEyMTU1MTQ3Ojc5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNRSytuZVFoUU9NNUs2Z09pdGszZ2ZlelRSYkhlenNPMzZRVFZYSU5VWVIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTg5MTAxNzF9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Memelord" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'memelord' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
