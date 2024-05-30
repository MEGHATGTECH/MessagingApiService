const { ObjectId } = require("mongodb");

exports.GetObjectID = (id) => {
    return new ObjectId(id);
}

exports.BuildMessegeObject = (Message) => {
    return (
        {
            id: Message._id.toString(),
            message: Message.message,
            userName: Message.author.name,
            refId: Message.author.refId,
            seen: Message.seen,
            seenTime: Message.seenTime || '',
            attachments: Message.attachments,
            sentAt: Message.sendTime,
            type: Message.type,
            isPinned: Message.isPinned,
            pinnedAt: Message.pinnedAt
        }
    )
}


exports.BuildGroupChatMessegeObject = (Message, groupId) => {
    return {
        id: Message._id.toString(),
        message: Message.message,
        groupId: groupId,
        userName: Message.author.name,
        refId: Message.author.refId,
        seen: Message.seen,
        seenTime: Message.seenTime || "",
        attachments: Message.attachments,
        sentAt: Message.sendTime,
        type: Message.type,
        isPinned: Message.isPinned,
        pinnedAt: Message.pinnedAt
    };
}


exports.BuildNotificationObject = (Notification) => {
    return {
        id: Notification._id.toString(),
        content: Notification.content,
        userName: Notification.sentBy.name,
        userId: Notification.sentBy.refId,
        type: Notification.type,
        notificationType: Notification.notificationType,
        subType: Notification.subType,
        sentAt: Notification.sentAt,
        isSeen: Notification.isSeen,
    };
}
