class Historia extends Phaser.Scene {
    constructor(){
        super('historia')
    }


            preload ()
        {
            this.load.image('siguiente', 'src/assets/imagenes/siguiente.png');
            this.load.image('historia', 'src/assets/imagenes/historia.png');

            
            
        }
            create ()
        {
            /// fondo///////
          
            this.add.image(964,535,'historia')
            

          
            const volver = this.add.image(1700, 900, 'siguiente').setScale(0.5)
            volver.setInteractive()
           
            volver.on('pointerdown', () =>  Sonidos.play());
           volver.on('pointerdown', () => this.scene.start('instruccion1') );

          
        }

       




}