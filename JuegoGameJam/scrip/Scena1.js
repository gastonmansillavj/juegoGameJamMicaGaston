class Scena1 extends Phaser.Scene {
    constructor(){
        super('pelea')
    }


     preload ()

{
    this.load.image('PlayerVerde', 'src/assets/imagenes/playerVerde.png');
    this.load.image('PlayerVerdeAnimaciones', 'src/assets/imagenes/playerVerde/prueba1.png');
    this.load.image('PlayerRojo', 'src/assets/imagenes/playerRojo.png');
    //this.load.image('PlayerRojoAnimaciones', 'src/assets/imagenes/playerRojo/SpriteSheetRojo.png');

 
}

create ()

{   
    /////////// piso ///////
    
    //let piso = this.physics.add.staticGroup();
    //piso.create(0,1250,'PlayerVerde')
    let piso = this.physics.add.staticGroup({
        key: 'PlayerVerde',
        repeat: 15,
        setXY: { x: 0, y: 1250, stepX: 140 }
    });
    //////////// jugador verde//////////

    PlayerVerde=this.physics.add.sprite(200,500,'PlayerVerde')
    PlayerVerde.vida=100;
    PlayerVerde.salto=true;
    PlayerVerde.estado='parado';
    PlayerVerde.mano;
    PlayerVerde.poder;
    PlayerVerde.rogando;
    PlayerVerdeAnim=this.add.sprite(200,500,'PlayerVerdeAnimaciones')
    //PlayerVerde.setCollideWorldBounds(true);

     //////////// jugador rojo//////////

     PlayerRojo=this.physics.add.sprite(800,500,'PlayerRojo')
     PlayerRojo.Enojo=100;
     PlayerRojo.salto=true;
     PlayerRojo.estado='parado';
     PlayerRojo.golpe='punch';
     PlayerRojo.xEnemigo=0;
     PlayerRojoAnim = this.add.sprite(200,500,'animacionRojo')
     
     PlayerRojo.setCollideWorldBounds(true);
 
    ///////////// tiempo ////////////
     tiempoDeJuego = 0;
    
     
     temporizadorTiempoJuego = this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });
        ///////// textos ///////
        Textos=this.add.text()
        Textos = this.add.text(800,25, "tiempo: 0", {
            font: "50px Arial",
            fill: "#FFFFFF",
            align: "center",
            stroke: "#de77ae",
            strokeThickness: 10
        }); 
    //////// controles ////////
    let btnAtaque=this.input.keyboard.addKey('A');
    let btnPowerUp=this.input.keyboard.addKey('S');
    
  
    if (cursors =! undefined){
        
         cursors = this.input.keyboard.createCursorKeys();
    }
    
    /////// colisiones ////////
    
    this.physics.add.collider(piso,PlayerVerde,this.activaSalto, null, this);
    this.physics.add.collider(piso,PlayerRojo);

    //////// pruebas /////////

   PlayerRojoAnim.anims.play('caminarRojo', true);
    
}

update(){

    ////////// tiempo  en pantalla ///////
  //  console.log(tiempoEspera)
   Textos.text='tiempo: '+ tiempoDeJuego
  //////// animaciones Player rojo /////////
  PlayerRojoAnim.x=PlayerRojo.x
  PlayerRojoAnim.y=PlayerRojo.y
////////// animacion player verde////////
  PlayerVerdeAnim.x=PlayerVerde.x
  PlayerVerdeAnim.y=PlayerVerde.y

   //// control de player //// 

    if (!GameOver) {
        if (PlayerVerde.estado=='parado'){

            if (cursors.up.isDown&&PlayerVerde.salto==true)
            {
                PlayerVerde.setVelocityY(-900)
                PlayerVerde.salto=false;
    
            }
        
            if (cursors.left.isDown)
            {
                PlayerVerde.setVelocityX(-250)
    
            }
            else if (cursors.right.isDown)
            {
                PlayerVerde.setVelocityX(250)
    
            }
        
            else {
                PlayerVerde.setVelocityX(0)
                
            }
    
        }
    
        else if (PlayerVerde.estado=='RecibeGolpe'){
    
        }
    
        else if (PlayerVerde.estado=='EnElSuelo'){
    
        }










         //////////// playerRojo//////////



    if (PlayerRojo.estado=='parado'){

        console.log('parado')
        this.tomaDecision(Phaser.Math.Between(0,2))
        //this.tomaDecision(0)

    }

    if (PlayerRojo.estado=='caminar'){

        console.log('caminando')

        if (PlayerRojo.x<=PlayerVerde.x) {

            PlayerRojo.setVelocityX (200)

            if (Phaser.Math.Distance.BetweenPoints(PlayerRojo, PlayerVerde)<=200){
                PlayerRojo.setVelocityX (0)
                this.tomaDecisionCaminar(Phaser.Math.Between(0,1))

                
            }
            
        } else {
            PlayerRojo.setVelocityX (-200)

           if (Phaser.Math.Distance.BetweenPoints(PlayerRojo, PlayerVerde)<=200){
                PlayerRojo.setVelocityX (0)
                this.tomaDecisionCaminar(Phaser.Math.Between(0,1))
                
            }
        }

       
      
        
    
    }

    if (PlayerRojo.estado=='hablar'){

        //// el personaje habla por tres segundos 
        console.log('hablando')

      if ( tiempoEspera<=tiempoDeJuego){

        this.tomaDecisionHablar(Phaser.Math.Between(0,1))
           
        }
       

       

    }

    if (PlayerRojo.estado=='encarar'){
        console.log('encarando')
        if ( tiempoEspera<=tiempoDeJuego){
            
            PlayerRojo.setVelocityX(0)
            this.tomaDecisionEncarar(Phaser.Math.Between(0,1))
            //this.tomaDecisionEncarar(1)
            
          
        }

    }

    if (PlayerRojo.estado=='patada'){
        console.log('pateando')
        //// despues de un tiempo vuelve al estado de parado
        if (tiempoEspera<=tiempoDeJuego){
            PlayerRojo.estado='parado'
            console.log("esta parado")
        }
    }

    if (PlayerRojo.estado=='punch'){
        console.log('golpeando')
         //// despues de un tiempo vuelve al estado de parado
        if (tiempoEspera<=tiempoDeJuego){

            PlayerRojo.estado='parado'
          
        }
        
         
    }

    if (PlayerRojo.estado=='darMano'){
      
        ///animacion dar mano por tres segundos 

        if (tiempoEspera<=tiempoDeJuego){
            console.log('termino de dar mano')
            PlayerRojo.estado='parado'
            
           
        }
      
    }
    if (PlayerRojo.estado =='espalda'){
        //// animacion dar la espalda por tres segundos
        if (tiempoEspera<=tiempoDeJuego){
            console.log('termino de dar espalda')
            PlayerRojo.estado='parado'
            
        }

   
    }

        
    }



}
   

activaSalto ()
{
    PlayerVerde.salto=true;

}
cadaSegundo(){
    tiempoDeJuego=tiempoDeJuego+1
  
}

tomaDecision(resultado){
    
    if (0==resultado){

        PlayerRojo.estado='hablar'
        tiempoEspera=tiempoDeJuego+2
    }
    else if (1==resultado){

        PlayerRojo.estado='caminar'
        tiempoEspera=tiempoDeJuego+3
    }
     else {
        PlayerRojo.estado='encarar'

        if (PlayerRojo.x<=PlayerVerde.x) {
            
            PlayerRojo.setVelocityX (800)
         
        } else {
            
           PlayerRojo.setVelocityX (-800)
           

        }

        tiempoEspera=tiempoDeJuego+3

     }

     
    
}

tomaDecisionCaminar(resultado) {

    if (0 == resultado){

    PlayerRojo.estado='punch'
    tiempoEspera=tiempoDeJuego+3


    }
    else{

    PlayerRojo.estado='patada'
    tiempoEspera=tiempoDeJuego+3

    }

    
  

}

tomaDecisionEncarar(resultado) {

    if (0==resultado){

    PlayerRojo.estado='caminar'

    }
    else{

        PlayerRojo.estado='parado'
    }
  

}

tomaDecisionHablar(resultado) {

    if (0==resultado){
    PlayerRojo.estado='darMano'
    tiempoEspera=tiempoDeJuego+3
    }

    else{
    PlayerRojo.estado='espalda'
    tiempoEspera=tiempoDeJuego+3
    }
  

}

   
}