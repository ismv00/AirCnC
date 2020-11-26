const { store } = require("./SessionController");

const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        // buscar dados da requisiçào
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        // cria a reserva
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // mostra todos os dados na resposta da requisiçao
        await booking.populate('spot').populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[booking.spot.user]

        if (ownerSocket){
            req.io.to(ownerSocket).emit('booking_request', booking);
        }

        return res.json(booking);
    }
}