class Menu extends Phaser.Scene {
    constructor(){
        super('menu')
    }


            preload ()
        {
            this.load.image('Pasivo', 'src/assets/imagenes/playerVerde.png');
           // this.load.spritesheet('animacionRojo', 'src/assets/imagenes/playerVerde/spriteSheetCaminar.png', { frameWidth: 500, frameHeight: 600 });
            this.load.spritesheet('animacionRojo', 'src/assets/imagenes/playerRojo/SpriteSheetRojo.png', { frameWidth: 500, frameHeight: 600 });


            
        }
            create ()
        {
            const play = this.add.image(850, 500, 'Pasivo').setScale(5,1)
            play.setInteractive()
            play.on('pointerdown', () => this.scene.start('pelea') );


            ////////// animaciones ///////
            this.anims.create({
                key: 'caminarRojo',
                frames: this.anims.generateFrameNumbers('animacionRojo', { start: 0, end:25 }),
                frameRate: 5,
                repeat: -1
            });
            
            
        }




}