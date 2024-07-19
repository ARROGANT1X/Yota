const fs = require('fs');

module.exports = {
  config: {
    name: "تجميع",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "ون بادئة",
    longDescription: "بدون بادئة",
    category: "النظام",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "siesta":
          message.reply({
            body: "✧───────────────✧\n\t\t\t\tѕɪᴇѕᴛᴀ ᴡᴀɪғᴜ 💖\n✧───────────────✧",
            attachment: fs.createReadStream("noprefix/sista.mp4"),
          });
          await api.setMessageReaction("💖", event.messageID, event.threadID, api);
          break;
        case "ناني":
          message.reply({
            body: "[ ناني 😗 ]",
            attachment: fs.createReadStream("noprefix/nani.mp3"),
          });
          await api.setMessageReaction("😨", event.messageID, event.threadID, api);
          break;
        case "أهلا":
          message.reply({
            body: "✧───────────────✧\n\t\t\tأهلا أختي او أخي منورين المجموعة بحضوركم 😁💖\n✧───────────────✧",
            attachment: fs.createReadStream("noprefix/welcom.gif"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
          break;
        case "الرمز":
          message.reply({
            body: "أهلا إليك الرمز الخاص بي  » © «",
            attachment: fs.createReadStream("noprefix/prefix.gif"),
          });
          await api.setMessageReaction("🪐", event.messageID, event.threadID, api);
          break;
        case "المالك":
          message.reply({
            body: "📜 معلومات حول المالك:\nالإسم :حسبن يعقوبي  \nالجنس :ذكر \nالعمر : مجهول \nرابط فيسبوك :https://www.facebook.com/profile.php?id=100076269693499 ",
            attachment: fs.createReadStream("noprefix/owner.gif"),
          });
          await api.setMessageReaction("😙", event.messageID, event.threadID, api);
          break;
        default:
          return;
      }
    }
  }
};
