const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//Importação dos controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);


//rotas da aplicacao
routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.get('/spots',SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;