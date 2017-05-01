app.filter('unit', function() {
	return function(p) {
		if (isNaN(p)) return p;
		return '€' + p + ' per task';
	}
})