const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') :"null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "5586995149163";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,5586995149163";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_41_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjR6OVVnSjJnQjkxQ2czamFwYVhUYUtiYThJb1laTG94MzJVY2s3cnkwdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTkpqTEhxZ09RMVdpZE5pYzV0N2FpUVwiLFxuICBcInBob25lSWRcIjogXCI2ZjI3NDRjNC01NTE3LTQwOTQtYjc2Ny1jOTQxYTI3NmZjZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxNTgsXG4gICAgICA4MCxcbiAgICAgIDE4NSxcbiAgICAgIDU4LFxuICAgICAgMjIwLFxuICAgICAgMjAwLFxuICAgICAgMTAwLFxuICAgICAgNDYsXG4gICAgICAyMDgsXG4gICAgICAxMTEsXG4gICAgICAxNzMsXG4gICAgICA2NyxcbiAgICAgIDQ4LFxuICAgICAgMjE0LFxuICAgICAgNTEsXG4gICAgICAxMDEsXG4gICAgICA3NixcbiAgICAgIDEwNixcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyMTksXG4gICAgICAxNDYsXG4gICAgICA2MCxcbiAgICAgIDIxMCxcbiAgICAgIDI2LFxuICAgICAgOTAsXG4gICAgICAyMjksXG4gICAgICA4NixcbiAgICAgIDg2LFxuICAgICAgNDIsXG4gICAgICAzNixcbiAgICAgIDIwMixcbiAgICAgIDE5MCxcbiAgICAgIDIxLFxuICAgICAgMjIwLFxuICAgICAgMjAwLFxuICAgICAgMjEyLFxuICAgICAgNjEsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzZMSjZKUVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjU1ODY5NTE0OTE2Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTmljb2xhc1wiLFxuICAgIFwibGlkXCI6IFwiMjA3ODY0MDUyMzIyNDg1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3Z0cG9nR0VOL3p5YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBeFdQb0FyZDRIMTIycW1vTzlSSzdLV0RuQ1Fqd05XK0ZXMVRYUnRCTzAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJTSFYyOGFZcnNsaUtlYUVPTTJ2VkwzSTVrdUpvTUg5c1RoMmxRR3QvYWk5SGhleG9hbkZVZFBudnVPT3hwaU12RnAyTHNqQ1BFWW1vMFFtNG9RUkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk85SXNvaVQrOGp3c3AwQjdXdTlSQlpzeVR2RXBDcmhqYUVwMHplM0lVd3RyT0M1cmYzTzRLT0VKcm1zb2Roajh2RlJzK2dLVHBSOWlyYnlUREx3d0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjU1ODY5NTE0OTE2Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzYxMjYzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
