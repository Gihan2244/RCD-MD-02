//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlleXpNVUxOS3NPR05CZCtCUUdSNEVMNkF1dk9RUWM2QlJRTlUrK20wTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDJmSUltNE55T3NqZGhTR0trc3JKWTdjUG9MVEhvd2YyOVdQcnRSVUVHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TEsrQ2xMN0crS2NDRlhLWEU5Qk9SNVd0K1o1T2xldnU1STNJNy9sYVVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWks3WVVxNmk4ZHV3aVBleElOa1F2TUUrWFErWUM4K0Z6eEVtQmF5UGo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QcnV2c0lnQ1dBNGlZUXFOVmJrZVpibkVWa0MyelZndm5Wa1QveklJR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZkejR6bk9URlBBcGtZckNKQ2xMR1BjMFlIWXgvU3JMcGh1Myt4bkIyZ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUM2N3BIR2pRY1NYUDBRYmtib20zMklmeWI0OE9DUDJpRTl4WWFGZ0Mzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjd0dmxSQU1DM2Fia1JjS1ZTYmtJUUFpQmNrcDMrcnZ4T0FWUWtnaFVsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxZR2p5MDNCZnhjTGtVVExCdWxhbSs2MHFYaTd0YkloSWtXRnBwUTFPUWdSMzlNS0FzOFFxVjZSaXdsY0RFV2VrZnRhT1Bjd1JUaHB1MnNKdkVWd2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Im9SSjB3K3YrcVVLbWN2c2tFL09xMzZ2eVZvN1U3VEZ2RytGNHJjREN3Ukk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDM2OTEzNjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUREMDJCNEI5QkZBQ0QwNjA0OTU3NEJBRjVERTM1QkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQ4NzI0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDM2OTEzNjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTg5NUFFMUVCNUI0MkY1MUFDOENFQjRDQTA0MjRDOTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQ4NzI0MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMXk2bGxzeElScGVRUXlPQ1ZnVWlSdyIsInBob25lSWQiOiJkZWIwOWVkZi02NmY0LTQ2OWItYjE0MC0wZGUwMzYyY2Q4MmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDk2MFh0V3pyQVRmTUJtSjJqSGpqQnJyWTU4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVjM0lvaVpYMnB3RUI4QS9SWHVJYUFNcFZLbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTWTVaSkdYQiIsIm1lIjp7ImlkIjoiOTQ3MDM2OTEzNjE6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTm8gTmFtZfCfkbkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1dHBub1F1NXF5dEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRiU09nRElDMjdWN3VwTVlJblZWb01uMlNDRndveHlseEYrV3NkQ2p2VHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZaSnpzOWUxYTBPbUUyQWJaMnlKbzJ4MWhsUXRuYi9BMms3RERjSjNKVVp2aTY1RVhySkNhVjRGSzh3enN1NksrMnNTZEwybWxCVFlLYnp3cmcrV0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3OFFudkkxYzhqWVVYWExQTUZ2UlJuQ3J4aVFwMG5udFR6Sm95Zis1YzBnZTRQVWMxaFgrMHlxaWJTYVBzVFFVM3NmYXZrQWJiZmNRaDVpQzd6RjNpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAzNjkxMzYxOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlEyMGpvQXlBdHUxZTdxVEdDSjFWYURKOWtnaGNLTWNwY1JmbHJIUW83MDgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0ODcyNDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT25XIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
