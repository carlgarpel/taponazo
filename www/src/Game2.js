//game-pruebas
Ball.Game = function(game) {};
Ball.MainMenu.prototype = {


	create: function() {

		this.taponCaido=false;
	//alert('DENTRO DE CREATE aquí');
		//FONDO ********************************************************************
		// Fondo fotográfico
		//this.add.sprite(0, 0, 'screen-bg');
		// Panel negro para menú superior
		this.add.sprite(0, 0, 'panel');

		this.buttonFondo = this.add.button(0, 0, 'screen-bg', this.girarTapon, this);
		//**************************************************************************

		//Añado a Geme la funcionalidad ARCADE de Phaser
		this.physics.startSystem(Phaser.Physics.ARCADE);


		this.ball = this.add.sprite(130, 130, 'ball');
		this.ball.anchor.set(0.5);
		this.physics.enable(this.ball, Phaser.Physics.ARCADE);

		this.ball.body.gravity.x =  2;
		this.ball.angle=90;


		this.ball1 = this.add.sprite(10, 10, 'ball');

		this.ball1.anchor.set(0.5);
		this.physics.enable(this.ball1, Phaser.Physics.ARCADE);

		this.ball1.body.gravity.x =  2;
		this.ball1.angle=45;

		this.ball2 = this.add.sprite(130, 130, 'ball');
		this.ball2.anchor.set(0.5);
		this.physics.enable(this.ball2, Phaser.Physics.ARCADE);

		this.ball2.body.gravity.x =  2;
		this.ball2.angle=90;

		//Grupo de bordes **********************************************************
		this.borderGroup = this.add.group();

		//Si es verdad todos los sprites creados con #create o #createMulitple 
		//tendrán un cuerpo creado la física sobre ellos. 
		//Cambiar el tipo de cuerpo con #physicsBodyType.
		this.borderGroup.enableBody = true;
		this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;

		this.borderGroup.create(0, 2, 'border-horizontal'); //2
		this.borderGroup.create(0, Ball._HEIGHT-12, 'border-horizontal'); //0
		this.borderGroup.create(0, 0, 'border-vertical'); //0
		this.borderGroup.create(Ball._WIDTH-2, 0, 'border-vertical'); //-2
		//Para que los sprite's se paren al tropezar con los bordes.
		this.borderGroup.setAll('body.immovable', true);

		//****************************************************************************

	},

	//UPDATE *********************************************************************************************
	update: function() {
		this.ball.body.velocity.y += 0.5; //this.velocidadY; //this.movementForce;
		//this.ball.body.velocity.x +=(3 * (+1)); ; //this.movementForce;
		this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
		//alert(velocidadX);
		if(this.taponCaido==true) {
			this.ball1.body.velocity.y += 0.5; //this.velocidadY; //this.movementForce;
		//this.ball.body.velocity.x +=(3 * (+1)); ; //this.movementForce;
		this.physics.arcade.collide(this.ball1, this.borderGroup, this.wallCollision, null, this);

		};
		
	},
	//****************************************************************************************************
	wallCollision: function() {
		//if(this.audioStatus) {this.bounceSound.play();}
		// Vibration API
		//if("vibrate" in window.navigator) {window.navigator.vibrate(100);}
		//alert("ffff");
		this.ball.body.destroy();
		this.taponCaido=true;

		
	},

	girarTapon: function() {
		this.ball.angle+=90;
		if(this.taponCaido)  this.ball1.angle+=90;
	}

};


