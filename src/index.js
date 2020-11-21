const { router, text, line, messenger } = require('bottender/router');
const handler = require('./handler')
exports.App = () => {
    return router([
        text(/^(hi|hello)$/i, handler.HandleFollow),
        text(/^('�ƦW')$/i, handler.rank),
        text(/^('���U')$/i, handler.help),

        line.message(handler.HandleLineMessage),
        line.follow(handler.HandleFollow),

        messenger.message(handler.HandleMessengerMessage),
        messenger.accountLinking(handler.HandleFollow),
    ]);
}
