

(function(global) {

	const gui = require('nw.gui');
	const win = gui.Window.get();


	win.x = 0;
	win.y = 0;

	win.resizeTo(1920 / 2, 1080);
	win.showDevTools();

	console.log(win.x, win.y);

})(typeof global !== 'undefined' ? global : this);

