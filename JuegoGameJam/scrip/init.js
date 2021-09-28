var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, 
        width:1920, 
        height:1080, 
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 2000 },
            debug: false
        }
    },
    scene:[Menu,Pierde,Gana,Scena1,Instruccion2,Instruccion1,Historia]
   
        //Menu,Scena1,Scena2,Scena3,Creditos,NivelGanadoPolicia,NivelGanadoTomar,NivelPerdido] //,Scena2,Scena3,Opciones,Ayuda
};
var game = new Phaser.Game(config)
var Textos;
var PlayerVerde;
var PlayerVerdeAnim;
var PlayerRojo;
var PlayerRojoAnim;
var cursors;
var temporizadorTiempoJuego;
var tiempoDeJuego;
var GameOver=false;
var tiempoEspera=0;
var TiempoMiliseg=0;
var Musica;
var Sonidos;

