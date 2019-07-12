(function () {
	if (typeof (Waves) !== 'undefined') {
		Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
		Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
		Waves.init();
	}
})();