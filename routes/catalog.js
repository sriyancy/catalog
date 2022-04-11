var express = require('express');
var router = express.Router();
var cart = require('../public/javascripts/catalog_plugin');
const seneca = require('seneca')();
const entities = require('seneca-entity');
const mongo_store = require('seneca-mongo-store');
seneca
	.quiet()
	.use(entities)
	.use(mongo_store, { name: 'InstaGrocer', host: '127.0.0.1', port: 27017 })
	.use(cart);
/* GET users listing. */
router.get('/', function (req, res, next) {
	var response;
	seneca.client({ type: 'tcp', pin: 'role:cart' });
	if (!req.query.type) {
		seneca.act({ role: 'cart', op: 'view' }, (err, res) => {
			if (err) {
				console.log('err', err);
			} else {
				response = res.result;
			}
		}).ready(function () {
			res.json({ RESPONSE: response });
		});
	} else {
		seneca.client({ type: 'tcp', pin: 'role:cart' });
		seneca.act({ role: 'cart', op: req.query.type }, (err, res) => {
			if (err) {
				console.log('err', err);
			} else {
				response = res.result;
			}
		}).ready(function () {
			res.json({ RESPONSE: response });
		});
	}
    
});

module.exports = router;