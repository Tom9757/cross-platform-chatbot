const { router, text, line, messenger } = require('bottender/router');
const handler = require('./handler')
const �ƦW = require('./�ƦW')
exports.App = () => {
    return router([
        text(/^(hi|hello|help)$/i, handler.HandleFollow),
        text(/^(�ƦW)$/i, �ƦW.HandleFollow),

        line.message(handler.HandleLineMessage),
        line.follow(handler.HandleFollow),

        messenger.message(handler.HandleMessengerMessage),
        messenger.accountLinking(handler.HandleFollow),
    ]);
}
