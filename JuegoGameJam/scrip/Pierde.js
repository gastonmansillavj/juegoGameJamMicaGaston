class Pierde extends Phaser.Scene {
    constructor(){
        super('pierde')
    }


            preload ()
        {

            this.load.image('btnVolver', 'src/assets/imagenes/botonVolver.png');
            this.load.image('fondoPierde', 'src/assets/imagenes/fondoPierdes.png');

            
            
        }
            create ()
        {
            /// fondo///////
            
            this.add.image(964,535,'fondoPierde')

          
            const volver = this.add.image(1700, 900, 'btnVolver').setScale(0.5)
            volver.setInteractive()
           volver.on('pointerdown', () => this.scene.start('menu') );

          
        }

       




}