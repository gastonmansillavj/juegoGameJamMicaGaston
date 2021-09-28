class Menu extends Phaser.Scene {
    constructor(){
        super('menu')
    }


            preload ()
        {
          
            this.load.image('Pasivo', 'src/assets/imagenes/playerVerde.png');
            this.load.spritesheet('animacionVerde', 'src/assets/imagenes/playerVerde/spriteSheetVerde.png', { frameWidth: 400, frameHeight: 500 });
            this.load.spritesheet('daMano', 'src/assets/imagenes/playerVerde/daMano.png', { frameWidth: 400, frameHeight: 500 });
            this.load.spritesheet('animacionRojo', 'src/assets/imagenes/playerRojo/SpriteSheetRojo.png', { frameWidth: 500, frameHeight: 600 });
            this.load.spritesheet('animacionParadoRojo', 'src/assets/imagenes/playerRojo/paradoRojo.png', { frameWidth: 500, frameHeight: 600 });
            this.load.image('fondoMenu', 'src/assets/imagenes/fondoMenu.png');
            this.load.image('btnJugar', 'src/assets/imagenes/botonJugar.png');
            this.load.image('btnAyuda', 'src/assets/imagenes/ayuda.png');
            this.load.audio('musica', ['src/assets/sonidos/musica.mp3']);
            this.load.audio('GolpeAcertado', ['src/assets/sonidos/golpeAcertado.mp3']);
            this.load.audio('salto', ['src/assets/sonidos/salto.mp3']);
            this.load.audio('onda', ['src/assets/sonidos/onda.mp3']);
            this.load.audio('locomotora', ['src/assets/sonidos/Locomotora.mp3']);
            this.load.audio('deslizar', ['src/assets/sonidos/deslizar.mp3']);
            this.load.audio('seleccionar', ['src/assets/sonidos/seleccionar.mp3']);
            


            
        }
            create ()
        {
         
    /*Musica = this.sound.add('musica')
    Musica.play()
    Musica.volume=1;
    Musica.loop=true
    Musica.detune=-800
*/
    Sonidos=this.sound.add('seleccionar')
    
    

    

            GameOver=false;
            /// fondo///////
            this.add.image(964,535,'fondoMenu')

            PlayerVerde=this.physics.add.sprite(400,700,'animacionVerde')
            PlayerVerde.body.allowGravity=false;
            PlayerRojo=this.physics.add.sprite(1500,650,'animacionRojo')
            PlayerRojo.body.allowGravity=false;



            const play = this.add.image(950, 500, 'btnJugar').setScale(1.2)
            play.setInteractive()
            play.on('pointerdown', () =>Sonidos.play() );
            play.on('pointerdown', () => this.scene.start('historia') );

           

            ////////// animaciones personaje Rojo  ///////
            this.anims.create({
                key: 'caminarRojo',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 5, end:8 }),
                frameRate: 4,
                repeat: -1
            });
            this.anims.create({
                key: 'golpearRojoI',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 0, end:1 }),
                frameRate: 4,
                repeat: 0
            });
            this.anims.create({
                key: 'golpearRojoD',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 2, end:3 }),
                frameRate: 4,
                repeat: 0
            });
            this.anims.create({
                key: 'patearRojo',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 24, end:25 }),
                frameRate: 2,
                repeat: 0
            });
            this.anims.create({
                key: 'hablarRojo',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 20, end:23 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'encararRojo',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 12, end:15 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'paradoRojo',
                frames: this.anims.generateFrameNumbers('animacionParadoRojo', { start: 0, end:2 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'deEspalda',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 16, end:19 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'darLaMano',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 9, end:10 }),
                frameRate: 5,
                repeat: -1
            });

            ////////// animaciones personaje Verde  ///////


            this.anims.create({
                key: 'caminarVerde',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 1, end:4 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'poder',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 12, end:16 }),
                frameRate: 5,
                repeat: 0
            });

            this.anims.create({
                key: 'muerto',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 0, end:0 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'salto',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 9, end:9 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'desliz',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 5, end:5 }),
                frameRate: 5,
                repeat: -1
            });

            this.anims.create({
                key: 'rogar',
                frames: this.anims.generateFrameNumbers('animacionVerde', { start: 6, end:8 }),
                frameRate: 5,
                repeat: -1
            });
            this.anims.create({
                key: 'darMano',
                frames: this.anims.generateFrameNumbers('daMano', { start: 0, end:0 }),
                frameRate: 5,
                repeat: -1
            });
            
           

           
               
                PlayerVerde.anims.play('caminarVerde', true).flipX=true;
                PlayerRojo.anims.play('paradoRojo', true).flipX=false;
          
          
           

            
            
        }

       




}