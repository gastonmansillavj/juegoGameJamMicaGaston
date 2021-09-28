class Instruccion1 extends Phaser.Scene {
    constructor(){
        super('instruccion1')
    }


            preload ()
        {
            this.load.image('siguiente', 'src/assets/imagenes/siguiente.png');
            this.load.image('instruccion1', 'src/assets/imagenes/instrucciones1.png');

            
            
        }
            create ()
        {
            /// fondo///////
          
            this.add.image(964,535,'instruccion1')
            

          
            const volver = this.add.image(1700, 900, 'siguiente').setScale(0.5)
            volver.setInteractive()
         
            volver.on('pointerdown', () =>Sonidos.play() );
           volver.on('pointerdown', () => this.scene.start('instruccion2') );

          
        }

       




}