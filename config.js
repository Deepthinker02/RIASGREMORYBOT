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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1PWVhGa1R0Z0c3UUNJL1ZTMlRJZ3pOL2x3dEh3ZUJOL1JTWE9KK3VtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzRMY1lEZGJwb2RqdXlBbENhN3RVOHlPdmV5aEFDZWlpY0xveDVKM0NGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSkdjRVVFL0FBWlN2SVhTdlA3RHh5SFpSWmI3U0ovMmN2cWRTazRZWFZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dnNkemZ6MWpRU0JnSzA5bDRzdUpPdDYvU3EwVlhuRXZDd0ZMdHBhTGpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJd3Z2d2dxUDR4Zjh5TmFqby9uQUN1WkZ2R3YyUTdidFFvSENyNEpoM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDOHg0dC9QUllIZ3M0Vjg1Y3FDcTErSlljUSt1VWJPK0c1ZktWTktwVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVOd0pGdGxleFpCdEdodDhmMnlOazJaeUJNa00yc3R2U1Fvb3NXSlNuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXpVZmsvZWtoaGVYY1lCWGN4Y2hkay9iWWNqWE1lYlhzYndDdzFFdGNXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBGL0ZxbEdFaTVTSkxDWC9DNU10NUlnTWlyek84WU9KTG5ENTF2SDhFVGFQTm9hRG5YRTRRMkJmWFMrYyszL3RiZk5MdFdPR1M1cFZrcjVBbnNPaWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJYZjNLWWxxZDhteit1MzNBcUFTYUVudy82aU43ZGNGdDFiSDN3T0RSTSt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnYzh6SEJVWVNfMkFMVkRNTHA4LXhRIiwicGhvbmVJZCI6IjU4MzJiYzQ2LTc4NjYtNDc1YS05YjdjLTdhMjcwYjQxZmQzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSdkJneDl6dHdodHdqQUZkYmQrRm1SQmdXbGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2xwM0JBdlpvVEM5YWhGeEpTQmJBTUQ4dHNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRMSk02NlRLIiwibWUiOnsiaWQiOiI5MjMxODk0OTI5OTU6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2dC9NOEdFTjdUakxjR0dCOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjN6OS9KWkRXZVQwYVFNeFpaVUN4ZE5jOTNMaEliaW92RGhHNkY0WlN0Z2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFoeTZIMGpqSHBsYlMxQ3lKcnVpaUlIaTNQUUlJUlRYVDdGbzhQNGc0TXUwakMvVS8rSS9NTVJyMk00OGNoUm9CeHpwWW96Lzh3Vmkzdm5ZRDEzbUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4blRoYVhtSVhzT3kzeFVUaGs2RkFxT3Z0b20ycnFUUDBZdkYrWjBlWW50QUtpSzZPM1ZZYWlDN3AxQkc0bFpXeTMwZ2dDN0Z6OFl2N2RkUGxydGtodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE4OTQ5Mjk5NToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOC9meVdRMW5rOUdrRE1XV1ZBc1hUWFBkeTRTRzRxTHc0UnVoZUdVcllJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MTYzNDM1fQ=="
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
