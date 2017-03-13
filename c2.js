function greeting(callback) {
	console.log('Hi');
	var data = {
		name: 'Halo'
	};
	callback(data);
}

greeting(data => {
	console.log('First Call !');
	console.log(data);
});

greeting(data => {
	console.log('Second Call !');
	console.log(data.name);
});
