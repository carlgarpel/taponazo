Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
	create: function() {
		this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
	},
	startGame: function() {
		if ('addEventListener' in document) {
   			 document.addEventListener('deviceready', function() {
       		 Ball.Game.acelerometro();
   			 }, false);

		this.game.state.start('Game');
	}
};