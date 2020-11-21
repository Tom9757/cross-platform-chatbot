const { router, text, line, messenger } = require('bottender/router');
const handler = require('./handler')
const Rank = require('./�ƦW')
exports.App = () => {
    return router([
        text(/^(hi|hello|help)$/i, handler.HandleFollow),
        text(/^(Rank|rank)$/i, Rank.HandleFollow),

        line.message(handler.HandleLineMessage),
        line.follow(handler.HandleFollow),

        messenger.message(handler.HandleMessengerMessage),
        messenger.accountLinking(handler.HandleFollow),
    ]);
}
