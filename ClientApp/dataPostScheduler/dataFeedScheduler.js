/**
 * This  method will schedule the client to send data.
 */

module.exports = {
    scheduleDataFeed : (client, timeinterval) => {
        setInterval(() => {
            client.write("ping from  client"+client.id);
        }, timeinterval * 1000);
    }
}