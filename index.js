const { Client, Intents, Guild } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_PRESENCES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});
client.on ('messageCreate', (message) => {
  
  if ( message.content = "あ") { setInterval(function () {

    if((message.member.presence.activities.length === 0)){
      console.log("彼はまだ何もしていない"); //アクティビティがない時の処理//
      
    
    }else{
      //アクティビティがあるときの処理//
      
      message.reply( message.member.presence.activities[0].name+ "をプレイ中!!");
      
    }
  
  }, 10000 ) 
  //↑ここにはループ間隔を書く//
 
    
  };
});



client.login("ここにトークンIDを貼り付けてください。");