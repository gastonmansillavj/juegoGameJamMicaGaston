class Instruccion2 extends Phaser.Scene {
    constructor(){
        super('instruccion2')
    }


            preload ()
        {
            
            this.load.image('btnVolver', 'src/assets/imagenes/botonVolver.png');
            this.load.image('instruccion2', 'src/assets/imagenes/instrucciones2.png');

            
            
        }
            create ()
        {
            /// fondo///////
            
            this.add.image(964,535,'instruccion2')
          
            const volver = this.add.image(1700, 900, 'siguiente').setScale(0.5)
            volver.setInteractive()
            
           volver.on('pointerdown', () =>Sonidos.play() );
           volver.on('pointerdown', () =>this.scene.start('pelea') );

          
        }

       




}