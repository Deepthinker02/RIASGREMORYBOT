//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0f089184835ed3d3b1f8c.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "923189492995";
global.owner = process.env.OWNER_NUMBER || "923189492995";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c71eab884ac90ecbf8d1c.png";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NSNi9qSmpzVnlvZGJkSE9Rcm1aNjNqTmFWZ0RVdktNZFMvdVJ0ekYzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2pnK3lzeFpmYlQ4SFcvbFdaSUF1OHhHbWxWRnMvaEdmQ1VibjVDYWlRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RW5OOWIrcnExWUxpWXhIUWVEU0VtUzNkTjBNVWhEMjNVOWM4MEkzeG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ3dRdGdtOGM2UUM3NXlXN3VadklGTlJtakgrNWwwL2lNUVlKeUtUMzNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEUVhxaXV6V2NHbWRBTTRvZVpLWXZRZlBqLzJKbG1RVVFGUGlWbUN0SGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBWERTQTBpSWZibUN3SzNPc21qdDNsMFN0NHludlJGM1paQ0pZdTF5emc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9LZ2I4Z3FGZFJ1WlRSaklWdERoODRscGJ5bVJVVmxUMVZ3R2V2TkNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVFaTW5CS3ZoOE00WFBKTzBzVHAxS1lNaHN6TXVkMVBDZlRCaWtEMnNGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGeHNRYWlIMm0xbUpqY21ja0VEdFdrVmVqOFFoSWc5QzN0NGRjQjlZZnl4MHkxR1BTMUxQbjJKb28xc1NJTkxISXlPcmxqWVo5Mlc0UG81eVRRSmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6Ild1c1lBQ3VMQlpSTzYxOVFiWHMwMWVIN3JzS0FDeWJ0bUVjcGZEeDdmU289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRQajRIT3RqUllxd01NVHVLQzlnU3ciLCJwaG9uZUlkIjoiMWMxNzA3Y2ItNjE1Yi00Y2U3LTljNTYtYTcyNzhiMDlhZDljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUzeGhsWVk3L0xRVkxYaUlKSTkrUUhscFQ3az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGaGVZREZnZDBqVjczcm9ubU16YU56ZFlzZk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0I4NUFQRkYiLCJtZSI6eyJpZCI6IjkyMzE4OTQ5Mjk5NToxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZ0L004R0VQTEI5TFlHR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3o5L0paRFdlVDBhUU14WlpVQ3hkTmM5M0xoSWJpb3ZEaEc2RjRaU3RnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0Fzc0Z1ZVBRaGtkZlhYV2tvdEN4ZmpCc1NyTDRONEZjanJCUnVtNUZFZUlVblY4ekRVMHpGdSt6U0NsV0NVZC9hZEY3YjZjem8wMG8vN25xS3lKQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFFWDB0RHFvMlZpcE9HOXZFYllTb1k1QjJBSEQyZ2RIMHZkZVdVUHB5aEhGelNqV2liSkFFTmJXUGlXRzk2V1pJa0hPdW11N1RJYW9xckRuWUtMTWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg5NDkyOTk1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4L2Z5V1Exbms5R2tETVdXVkFzWFRYUGR5NFNHNHFMdzRSdWhlR1VyWUkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU3Njc5MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHo4In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ *༈֎Ă̈wais Ĭ̈qbal⭐⃟❀❥︎* ㋛︎",
  author: process.env.PACK_AUTHER || "𓆩Awais࿐",
  packname: process.env.PACK_NAME || "WASI 𝗠𝗗",
  botname: process.env.BOT_NAME || "*༈֎Ă̈wais Ĭ̈qbal⭐⃟❀❥︎* ㋛︎",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b1a3a2e8cb4558da4a93873d8ea1b670",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
