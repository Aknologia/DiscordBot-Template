module.exports = {
    config: {
        id: 'ping',
        name: 'Ping',
        description: "Shows the Bot's current latency."
    },
    execute(client, args){
        console.log('Ping')
    }
}