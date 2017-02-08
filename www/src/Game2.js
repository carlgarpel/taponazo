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


		this.ball = this.add.sprite(80, 80, 'ball');
		this.ball.anchor.set(0.5);
		this.physics.enable(this.ball, Phaser.Physics.ARCADE);




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
		this.ball.body.velocity.y += 10 //this.movementForce;
	},
		
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	}
};
