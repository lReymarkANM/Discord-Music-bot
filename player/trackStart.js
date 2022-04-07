module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} Now playing **${track.title}** in **${message.member.voice.channel.name}**!`);
};