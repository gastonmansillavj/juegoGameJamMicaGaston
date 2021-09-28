class Gana extends Phaser.Scene {
    constructor(){
        super('gana')
    }


            preload ()
        {
            this.load.image('btnVolver', 'src/assets/imagenes/botonVolver.png');
            this.load.image('fondoGana', 'src/assets/imagenes/FondoGana.png');

            
            
        }
            create ()
        {
            /// fondo///////
            
            this.add.image(964,535,'fondoGana')
            

          
            const volver = this.add.image(1700, 900, 'btnVolver').setScale(0.5)
            volver.setInteractive()
           volver.on('pointerdown', () => this.scene.start('menu') );

          
        }

       




}