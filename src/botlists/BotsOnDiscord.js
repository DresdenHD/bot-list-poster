const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class BotsOnDiscord extends BotList {
  constructor (name) {
    super({
      name: 'botsondiscord',
      url: 'https://bots.ondiscord.xyz/',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, token }) {
    fetch(`https://bots.ondiscord.xyz/bot-api/${botId}/guilds`, {
      method: 'post',
      body: JSON.stringify([
        {
          guildCount: guildCount
        }
      ]),
      headers: {
        Authorization: token
      }
    })
    return true
  }
}
