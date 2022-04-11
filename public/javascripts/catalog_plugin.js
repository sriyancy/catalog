function cart(options) {
	this.add({ role: 'cart', op: 'view' }, (args, reply) => {
        console.log('inside seneca view')
		const item = this.make('catalog');
		item.list$({}, (err, items) => {
			if (err) return console.log(err);
			reply(null, { result: items });
		});
	});
	this.add({ role: 'cart', op: 'fruit' }, (args, reply) => {
		const item = this.make('catalog');
		item.list$({ type: 'fruit' }, (err, items) => {
			if (err) return console.log(err);
			reply(null, { result: items });
		});
	});
	this.add({ role: 'cart', op: 'meat' }, (args, reply) => {
		const item = this.make('catalog');
		item.list$({ type: 'meat' }, (err, items) => {
			if (err) return console.log(err);
			reply(null, { result: items });
		});
	});
	this.add({ role: 'cart', op: 'vegetable' }, (args, reply) => {
		const item = this.make('catalog');
		item.list$({ type: 'vegetable' }, (err, items) => {
			if (err) return console.log(err);
			reply(null, { result: items });
		});
	});
	this.add({ role: 'cart', op: 'dairy' }, (args, reply) => {
		const item = this.make('catalog');
		item.list$({ type: 'dairy' }, (err, items) => {
			if (err) return console.log(err);
			reply(null, { result: items });
		});
	});
	this.add({ role: 'cart', op: 'vegan' }, (args, reply) => {
		const item = this.make('catalog');
		item.list$({ type: 'vegan' }, (err, books) => {
			if (err) return console.log(err);
			reply(null, { result: books });
		});
	});
}

module.exports = cart;