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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0F5dHRYdzlPdlRyZ2oxY1V2RDRkVHlZYUJoSzd6a3pCL2tyRzJ6eUlIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGN4QTI4YjhiNEZCTkRCMUlvZE9hbC85WGhVSytBVVhudzZFcjhDRklVcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSDFJM3gwbEh3YmlBeGsxdE1ETTJVd1EwcWVUR01tWmROckYyMXlZckhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTW4wVk54SGVjNXlNalAwc1lwNHRUNGlYY0Q4MFI4bFFWUHVTVzlaRGpNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVERkk3NHVwMXFmMkVaRnBiUm95c0NRQURNS29haFhkTW5FMWoxUnI5WFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk3ZWM1ZWZuRkdNWEJSSW04cVJBUXFIN05Ca1RUUjErSzVLMzJGRjU0V2s9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJacmx1bnhPYllqNmVqeTRFZ2t4SFpCNWp4bktuWDZPcm1IMGFFUVdEaE9RZGp4RXUzcmswbGhsUnh0N1ZORjRuWTFFU3ROMmtnM1BNMUswbnNvYk1Bdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1OCwiYWR2U2VjcmV0S2V5IjoiSjRPVHk3eVF5U3pMd3ZWcHhQVkUzK3lFQkhIckZLUERFNk9SY3V2aEJPUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaFBaMG94WDZTSGFkUVVodW1JTjlaQSIsInBob25lSWQiOiIwMDdhZmIxOC1hNDgwLTQ4MmEtYTBlZS03ZTg5NDgxZDc5YjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFV0ckhOMHZaZ3N2Z2tEQ0Q2S1JkdkpPeFpBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSUxmYXF4Q1dERnZRaFpZK25wVCttdVY0bHM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdmIrSVlDRUo2Ny9xd0dHQWM9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU5VWpyaCtEWUhnaWR4bTJDNEJwbktlUUVod0Z1bllacWJpL3dXQ2pGUUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZZZWtvT3c1SStFWm5lVVhHMnFCZ2dLKzg4QjkzK3BNYVdacFRFZmtmMUhaa1V1WU5GY1Q3SlFoWFVEL0RmeEdiRUR3MkxLaEViNzFvV2dLbG1Lb0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvOEtKUHNzQU56THI0dElZdHNBNDhNR01qR0x3Q2xrRXc3UVl1ZzVaZ2lWR3ZwNTBUeXJFeFVuRlRyZHlNNTdGTGxSMG91b1FyTDlaK1JIdXhJeDBBdz09In0sIm1lIjp7ImlkIjoiMjU0NzEyMTU1MTQ3Ojg5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMjE1NTE0Nzo4OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdlZJNjRmZzJCNEluY1p0Z3VBYVp5bmtCSWNCYnAyR2FtNHY4RmdveFVCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0OTU5Mzk0fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Memelord" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'memelord' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
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
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'af5aeb1a-ff31-498d-b38f-6e01b8487f4c' : process.env.HEROKU_API_KEY,
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
