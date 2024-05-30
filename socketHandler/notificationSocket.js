
const { addNotification } = require("../controllers/notificationController");
const serverStore = require("../serverStore");
var Io = null
const notificationSocket = (socket, io) => {
    try {
        Io = io
        const { userId } = socket.user;

        socket.on("send-notification", async (data) => {

            const response = await addNotification(userId, data);
            if (response) {
                emitNotificationToUser([response.to], response.data, io);
            }
        });

    } catch (error) {
        console.log("Error occurred in socket", error.message);
    }
};

function emitNotificationToUser(Users, message, io) {
    const connectionId = serverStore.getActiveConnections(
        Users.map((x) => x.toString())
    );
    connectionId.forEach((x) => {
        io.to(x).emit("receive-notification", message); // broadcast message to the selected users if they are active
    });
}

function pingUser(Users) {
    const connectionId = serverStore.getActiveConnections(
        Users.map((x) => x.toString())
    );
    if (Io) {
        connectionId.forEach((x) => {
            Io.to(x).emit("ping-me", 'You have a new message'); // broadcast message to the selected users if they are active
        });
    }
}

module.exports = {
    notificationSocket,
    pingUser
};