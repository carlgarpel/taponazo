//game-pruebas
Ball.Game = function(game) {};

Ball.Game.prototype = {
	create: function() {
		//FONDO ********************************************************************
		// Fondo fotográfico
		this.add.sprite(0, 0, 'screen-bg');
		// Panel negro para menú superior
		this.add.sprite(0, 0, 'panel');
		//**************************************************************************

		//Añado a Geme la funcionalidad ARCADE de Phaser
		this.physics.startSystem(Phaser.Physics.ARCADE);


		this.ball = this.add.sprite(80, 130, 'ball');
		this.ball.anchor.set(0.5);
		this.physics.enable(this.ball, Phaser.Physics.ARCADE);

		this.ball.body.gravity.x =  10 //100 + Math.random() * 100;


		//Grupo de bordes **********************************************************
		this.borderGroup = this.add.group();

		//Si es verdad todos los sprites creados con #create o #createMulitple 
		//tendrán un cuerpo creado la física sobre ellos. 
		//Cambiar el tipo de cuerpo con #physicsBodyType.
		this.borderGroup.enableBody = true;
		this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;

		this.borderGroup.create(0, 150, 'border-horizontal'); //2
		this.borderGroup.create(0+50, Ball._HEIGHT-100, 'border-horizontal'); //0
		this.borderGroup.create(0+50, 0, 'border-vertical'); //0
		this.borderGroup.create(Ball._WIDTH-52, 0, 'border-vertical'); //-2
		//Para que los sprite's se paren al tropezar con los bordes.
		this.borderGroup.setAll('body.immovable', true);

		//****************************************************************************

	},
	update: function() {
		this.ball.body.velocity.y += 5 //this.movementForce;

		this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
		
	},
	wallCollision: function() {
	/*	if(this.audioStatus) {
			this.bounceSound.play();
		}
		// Vibration API
		if("vibrate" in window.navigator) {
			window.navigator.vibrate(100);
		}*/


	},
		
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	}
};
