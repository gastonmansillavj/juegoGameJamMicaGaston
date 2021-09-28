class Scena1 extends Phaser.Scene {
    constructor(){
        super('pelea')
    }


     preload ()

{
   
    this.load.image('gui', 'src/assets/imagenes/gui.png');
    this.load.image('guiV', 'src/assets/imagenes/guiPVerde.png');
    this.load.image('guiR', 'src/assets/imagenes/guiPRojo.png');
    this.load.image('PlayerVerde', 'src/assets/imagenes/PlayerVerde.png');
    this.load.image('barraVerde', 'src/assets/imagenes/barraVerde.png');
    
    this.load.image('barraAmarilla', 'src/assets/imagenes/barraAmarilla.png');
    this.load.image('barraRoja', 'src/assets/imagenes/barraRoja.png');
    this.load.image('barraColores', 'src/assets/imagenes/barraColores1.png');
   
    this.load.image('barraGris', 'src/assets/imagenes/barraGris.png');
    this.load.image('PerdonFueUnAccidente', 'src/assets/imagenes/logoPerdon.png');
    this.load.image('PerdonFueUnAccidenteI', 'src/assets/imagenes/logoPerdonI.png');
    this.load.image('DestruirI', 'src/assets/imagenes/teVoyADestruirI.png');
    this.load.image('DestruirD', 'src/assets/imagenes/teVoyADestruir.png');
    this.load.image('fondo', 'src/assets/imagenes/fondo.png');
    //this.load.image('PlayerVerdeAnimaciones', 'src/assets/imagenes/playerVerde/prueba1.png');
    this.load.image('PlayerRojo', 'src/assets/imagenes/PlayerRojo.png');
    //this.load.image('PlayerRojoAnimaciones', 'src/assets/imagenes/playerRojo/SpriteSheetRojo.png');

 
}

create ()

{   
    ///////// sonidos ///////////

    Musica = this.sound.add('musica')
    Musica.play()
    Musica.volume=0.5;
    Musica.loop=true
   // Musica.detune=-500
    console.log(Musica)
   


    Sonidos.GolpeAcertado = this.sound.add('GolpeAcertado')
    Sonidos.GolpeAcertado.volume=0.2
    Sonidos.salto=this.sound.add('salto')
    Sonidos.salto.volume=0.1
    Sonidos.deslizar=this.sound.add('deslizar')
    Sonidos.deslizar.volume=0.1
    Sonidos.onda=this.sound.add('onda')
    Sonidos.onda.volume=0.1
    Sonidos.locomotora=this.sound.add('locomotora')
    Sonidos.locomotora.volume=0.1
    /////////// piso ///////

    
    //let piso = this.physics.add.staticGroup();
    //piso.create(0,1250,'PlayerVerde')
    let piso = this.physics.add.staticGroup({
        key: 'PlayerVerde',
        repeat: 15,
        setXY: { x: 0, y: 1250, stepX: 140 }
    });


    /////// fondo ///////
    
    this.add.image(960,550,'fondo')
    this.add.image(960,100,'gui')
    this.add.image(100,100,'guiV').setScale(0.8)
    this.add.image(1850,100,'guiR').setScale(0.8)



   
    


    //////////// jugador verde//////////

    PlayerVerde=this.physics.add.sprite(200,500,'PlayerVerde')
    PlayerVerde.visible = false; ////oculto el hitbox
    PlayerVerde.setScale()
    PlayerVerde.vida=400;
    PlayerVerde.velocidadSalto=-1300
    PlayerVerde.velocidadCaminar=800
    PlayerVerde.salto=true;
    PlayerVerde.estado='parado';
    PlayerVerde.mano;
    PlayerVerde.poder;
    PlayerVerde.rogando;
    PlayerVerde.TiempoMiliseg=0
    PlayerVerdeAnim=this.add.sprite(200,500,'animacionVerde')
    
    /// cuando se desliza el personaje//

    PlayerVerde.bodyDesliza=this.physics.add.sprite(200,500,'PlayerRojo').setScale(0.6,0.3)
    PlayerVerde.bodyDesliza.body.allowGravity=false;
    PlayerVerde.bodyDesliza.visible = false; ////oculto el hitbox

    PlayerVerde.setCollideWorldBounds(true);
    PlayerVerde.Dlogo=this.add.image(960,550,'PerdonFueUnAccidente').setScale(0.7)
    PlayerVerde.Ilogo=this.add.image(960,550,'PerdonFueUnAccidenteI').setScale(0.7)


    ///////// barrra vida player Verde //////
    this.add.image(400,85,'barraGris').setScale(1,1.5)
    PlayerVerde.barraVida=this.add.image(200,85,'barraVerde').setScale(1,1.5)
   
    PlayerVerde.barraVida.displayOriginX=0
    
    console.log(PlayerVerde.barraVida)
     //////////// jugador rojo//////////

     PlayerRojo=this.physics.add.sprite(1600,600,'PlayerRojo');
     PlayerRojo.visible = false; ////oculto el hitbox
     PlayerRojo.Vida = 400;
     PlayerRojo.setScale(1.2,0.8)
     PlayerRojo.Enojo=100;
     PlayerRojo.salto=true;
     PlayerRojo.estado='parado';
     PlayerRojo.golpe=this.physics.add.sprite(200,500,'PlayerVerde').setScale(0.4,0.1)
     PlayerRojo.golpe.body.allowGravity = false;
     PlayerRojo.golpe.visible = false; 
     PlayerRojo.xEnemigo=0;

     /// cuando se encara el personaje//
     PlayerRojo.bodyEncare=this.physics.add.sprite(200,500,'PlayerVerde').setScale(1.5,0.7)
     PlayerRojo.bodyEncare.body.allowGravity=false;
     PlayerRojo.bodyEncare.visible = false; ////oculto el hitbox
    
     PlayerRojoAnim = this.add.sprite(200,500,'animacionRojo')

     
     PlayerRojo.setCollideWorldBounds(true);

     ///////// logos ///////
     PlayerRojo.logoD=this.add.image(960,550,'DestruirD').setScale(0.7)
     PlayerRojo.logoI=this.add.image(960,550,'DestruirI').setScale(0.7)

     //////// barra vida playerRojo/// 
     this.add.image(1546,85,'barraGris').setScale(1,1.5)
     PlayerRojo.barraVida=this.add.sprite(1730,85,'barrasSheet').setScale(1,1.5)
     PlayerRojo.barraVida.displayOriginX=400
     
    

 
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
      /*  Textos.VidaVerde = this.add.text(300,25, "vida: 100", {
            font: "50px Arial",
            fill: "#FFFFFF",
            align: "center",
            stroke: "#de77ae",
            strokeThickness: 10
        }); 

        Textos.VidaRojo = this.add.text(1600,25, "vida: 100", {
            font: "50px Arial",
            fill: "#FFFFFF",
            align: "center",
            stroke: "#de77ae",
            strokeThickness: 10
        }); 
        */
    //////// controles ////////
   PlayerVerde.btnW=this.input.keyboard.addKey('W');
   PlayerVerde.btnL=this.input.keyboard.addKey('L');
   PlayerVerde.btnA=this.input.keyboard.addKey('A');
   PlayerVerde.btnD=this.input.keyboard.addKey('D');
   PlayerVerde.btnJ=this.input.keyboard.addKey('J');
   PlayerVerde.btnK=this.input.keyboard.addKey('K');
    
  
    if (cursors =! undefined){
        
         cursors = this.input.keyboard.createCursorKeys();
    }
    
    /////// colisiones ////////
    
    this.physics.add.collider(piso,PlayerVerde,this.activaSalto, null, this);
    this.physics.add.collider(piso,PlayerRojo);
    this.physics.add.collider(piso,PlayerRojo.bodyEncare)
    this.physics.add.overlap(PlayerVerde.bodyDesliza,PlayerRojo.bodyEncare,this.colisionEncare, null, this);
    this.physics.add.overlap(PlayerVerde.bodyDesliza,PlayerRojo.golpe,this.colisionPuño, null, this);
    

    //////// pruebas /////////

  PlayerRojoAnim.anims.play('paradoRojo', true);
  PlayerVerdeAnim.anims.play('rogar', true);

    
}

update(){

    //// prueba barra vida ////// 
    if (PlayerRojo.Vida>=400){
        PlayerRojo.Vida=400
    }
    PlayerVerde.barraVida.displayWidth=PlayerVerde.vida
    PlayerRojo.barraVida.displayWidth=PlayerRojo.Vida
  


    ////////// tiempo  en pantalla ///////
  //  console.log(tiempoEspera)

   Textos.text='tiempo: '+ tiempoDeJuego
  // Textos.VidaVerde.text='Vida: '+ PlayerVerde.vida
   //Textos.VidaRojo.text='Vida: '+ PlayerRojo.Vida
   
   
  //////// animaciones Player rojo /////////
  if (PlayerRojoAnim.flipX==false) {
    PlayerRojoAnim.x=PlayerRojo.x-40 ///// si le aumentas el numero negativo , va mas a la derecha
    PlayerRojo.bodyEncare.x=PlayerRojo.x
    PlayerRojo.golpe.y=PlayerRojo.y
    PlayerRojo.golpe.x=PlayerRojo.x-180
    PlayerRojo.logoI.x=PlayerRojo.x-230
    
    
  }
 else {
    PlayerRojoAnim.x=PlayerRojo.x
    PlayerRojo.bodyEncare.x=PlayerRojo.x+10
    PlayerRojo.golpe.x=PlayerRojo.x+180
    PlayerRojo.golpe.y=PlayerRojo.y
    PlayerRojo.logoD.x=PlayerRojo.x+200
    
    
  }
  
  PlayerRojoAnim.y=PlayerRojo.y-60
  PlayerRojo.bodyEncare.y=PlayerRojo.y+80



////////// animacion player verde////////

if (PlayerVerdeAnim.flipX == false) {
   PlayerVerdeAnim.x=PlayerVerde.x+50 ///// si le aumentas el numero negativo , va mas a la derecha
    PlayerVerde.bodyDesliza.x=PlayerVerde.x
    PlayerVerde.Dlogo.x=PlayerVerde.x+200
  }

 else {

    PlayerVerdeAnim.x=PlayerVerde.x-70
    PlayerVerde.bodyDesliza.x=PlayerVerde.x
    PlayerVerde.Ilogo.x=PlayerVerde.x-200
   
  }


  PlayerVerde.bodyDesliza.y=PlayerVerde.y+180
  PlayerVerdeAnim.y=PlayerVerde.y

  //console.log(PlayerVerde.estado)

   //// control de player //// 

   if (PlayerRojo.Vida<=0||PlayerVerde.vida<=0) {

    GameOver=true;
}

    if (!GameOver) {
                    
            if( PlayerVerde.estado!='poder') {
                PlayerRojo.barraVida.anims.play('estandar',true)
            }
                   
                    
                   if( PlayerVerde.estado!='RecibeGolpe') {
                      

                        if (PlayerVerde.btnW.isDown&&PlayerVerde.salto==true&&PlayerVerde.estado!='desliz')
                        {
                            
                            PlayerVerde.setVelocityY(PlayerVerde.velocidadSalto)
                            PlayerVerde.salto=false;
                            PlayerVerde.estado='salto'
                            Sonidos.salto.play()
                            
                           
                
                        }
                        else if (PlayerVerde.btnJ.isDown&&(PlayerVerde.btnA.isDown||PlayerVerde.btnD.isDown))
                        
                        {   
                            if (PlayerVerde.estado!='desliz'&&(PlayerVerde.TiempoMiliseg+200<=this.time.now)&&PlayerVerde.salto==true) {
                                PlayerVerde.estado='desliz'
                                Sonidos.deslizar.play()
                                PlayerVerde.TiempoMiliseg=this.time.now+950
                                console.log('desliannnnnnnndo')
                            }
                           
                           
                           
                        }

                         if (((PlayerVerde.btnL.isDown)||(PlayerVerde.btnL.isDown&&(PlayerVerde.btnA.isDown||PlayerVerde.btnS.isDown)))&&PlayerVerde.estado!='desliz'&&PlayerVerde.salto==true)
                        {
                            PlayerVerde.estado='daLaMano'

                        }
                    
                        else if (PlayerVerde.btnA.isDown&&PlayerVerde.estado!='desliz')
                        {
                            PlayerVerde.setVelocityX(-PlayerVerde.velocidadCaminar)
                            PlayerVerdeAnim.flipX = true
                            if (PlayerVerde.estado=='parado') {
                                PlayerVerde.estado='camina'
                            }
                
                        }
                        else if (PlayerVerde.btnD.isDown&&PlayerVerde.estado!='desliz')
                        {
                            PlayerVerde.setVelocityX(PlayerVerde.velocidadCaminar)
                            PlayerVerdeAnim.flipX = false
                            if (PlayerVerde.estado=='parado') {
                                PlayerVerde.estado='camina'
                            }
                
                        }
                        else if (PlayerVerde.btnK.isDown&&PlayerVerde.estado!='desliz'&&PlayerVerde.salto==true)
                        {
                            PlayerVerde.estado='poder'
                           

                        }
                       

                        else {
                            
                            if (PlayerVerde.estado!='salto'&& PlayerVerde.estado!='desliz'&&PlayerVerde.estado!='poder'&&PlayerVerde.estado!='RecibeGolpe') {
                                PlayerVerde.estado='parado'
                                PlayerVerde.setVelocityX(0)
                            }
                          
                           
                            
                        }



                   }

                 if (PlayerVerde.estado!='parado'){
                    PlayerVerde.Dlogo.visible=false
                    PlayerVerde.Ilogo.visible=false
                }
                   
                
            if (PlayerVerde.estado=='salto'){

            PlayerVerdeAnim.anims.play('salto', true)
            PlayerVerde.bodyDesliza.setScale(0.6,0.6)
            PlayerVerde.bodyDesliza.y=PlayerVerde.y-100
            
            }

            else if (PlayerVerde.estado=='camina'){
                PlayerVerdeAnim.anims.play('caminarVerde', true)
                PlayerVerde.bodyDesliza.setScale(0.6,0.6)
                PlayerVerde.bodyDesliza.y=PlayerVerde.y-30
            }

            else if (PlayerVerde.estado=='parado'){
                PlayerVerdeAnim.anims.play('rogar', true);
                PlayerVerdeAnim.x=PlayerVerde.x
                PlayerVerde.bodyDesliza.setScale(0.6,0.6)
                PlayerVerde.bodyDesliza.y=PlayerVerde.y-30

                if (PlayerVerdeAnim.flipX== true)
                {
                    PlayerVerde.Dlogo.visible=false
                    PlayerVerde.Ilogo.visible=true

                }
                else {

                   
                    PlayerVerde.Dlogo.visible=true
                    PlayerVerde.Ilogo.visible=false
                }
            
            }
           
            else if (PlayerVerde.estado=='desliz'){
                
                //// para controlar la animacion revise lo que me activa la colision con el suelo
                PlayerVerdeAnim.anims.play('desliz', true)
                PlayerVerde.bodyDesliza.setScale(0.6,0.3)

                if (PlayerVerdeAnim.flipX==false){

                    PlayerVerde.setVelocityX(800)

                }
                else {
                    PlayerVerde.setVelocityX(-800)
                }

                if ( PlayerVerde.TiempoMiliseg<=this.time.now){

                    PlayerVerde.estado='parado'
                       
                    }
        
            }
           
            else if (PlayerVerde.estado=='poder'){

                if(!Sonidos.onda.isPlaying){
                    Sonidos.onda.play()
                }
                
                PlayerVerdeAnim.anims.play('poder', true)
                PlayerVerde.setVelocityX(0)

                ///// controla quita vida rojo //////

                if(PlayerRojo.estado=='hablar'||PlayerRojo.estado=='espalda'||PlayerRojo.estado=='darMano') {
                    PlayerRojo.Vida=PlayerRojo.Vida-0.3
                    
              
                   
                    if( PlayerRojoAnim.anims.currentAnim.key!='restando'){
                        PlayerRojo.barraVida.anims.play('restando',true)
                    }

                  //  PlayerRojo.barraVida.anims.play('restando',true)
                   
                    
                }
                else {
                    PlayerRojo.Vida=PlayerRojo.Vida+0.1

                    PlayerRojo.barraVida.anims.play('sumando',true)
                    //PlayerRojo.barraVida.anims.play('sumando',true)
                   
                }
            }

            else if (PlayerVerde.estado =='RecibeGolpe'){
                
                PlayerVerdeAnim.anims.play('muerto', true)
                PlayerVerde.setVelocityX(0)
               

                if ( TiempoMiliseg<=this.time.now){
                    console.log('recibioGolpe')
                    PlayerRojo.bodyEncare.enableBody(true, true);
                    PlayerRojo.golpe.enableBody(true, true);
                    PlayerVerde.estado='parado'

                       
                    }

            }
        
            else if (PlayerVerde.estado=='daLaMano'){
                
                PlayerVerdeAnim.anims.play('darMano', true)
                PlayerVerde.setVelocityX(0)
        
            }


//////////////// //////////// playerRojo/////////////////////



    if (PlayerRojo.estado=='parado'){

       // console.log('parado')
        this.tomaDecision(Phaser.Math.Between(0,3))
        PlayerRojo.setScale(1.2,0.8)
        //this.tomaDecision(0)

    }

    if (PlayerRojo.estado=='caminar'){

        //console.log('caminando')

        if (PlayerRojo.x<=PlayerVerde.x) {

            PlayerRojo.setVelocityX (300)
            

            if (Phaser.Math.Distance.BetweenPoints(PlayerRojo, PlayerVerde)<=250){
                PlayerRojo.setVelocityX (0)
                this.tomaDecisionCaminar(Phaser.Math.Between(0,1))

                //// aleatorio entre patada y puño

               // this.tomaDecisionCaminar(0)

                /// lo deje solo puño 

                
            }
            
        } else {
            PlayerRojo.setVelocityX (-300)
            

           if (Phaser.Math.Distance.BetweenPoints(PlayerRojo, PlayerVerde)<=250){
                PlayerRojo.setVelocityX (0)
                this.tomaDecisionCaminar(Phaser.Math.Between(0,1))
                //// aleatorio entre patada y puño

                //this.tomaDecisionCaminar(0)

                /// lo deje solo puño 

                
            }
        }

       
      
        
    
    }



    /////////////////////////////////////////////////////////////

    if (PlayerRojo.estado!='darMano'||PlayerRojo.estado=='hablar'||PlayerRojo.estado=='deEspalda'){
        PlayerRojo.logoI.visible=false;
        PlayerRojo.logoD.visible=false;
    }



    if (PlayerRojo.estado=='hablar'){

        ///el personaje habla por tres segundos 
        console.log('hablando')

   /*   if ( tiempoEspera<=tiempoDeJuego){

        this.tomaDecisionHablar(Phaser.Math.Between(0,1))
           
        }

        
*/

        this.LogoRojo ()
       
   
        if ( TiempoMiliseg<=this.time.now){

            this.tomaDecisionHablar(Phaser.Math.Between(0,1))
               
            }
 
    }

    if (PlayerRojo.estado=='encarar'){
       // console.log('encarando')
/*
        if ( tiempoEspera<=tiempoDeJuego){
            
            PlayerRojo.setVelocityX(0)
            this.tomaDecisionEncarar(Phaser.Math.Between(0,1))
            //this.tomaDecisionEncarar(1)
            
          
        }
*/
        if ( TiempoMiliseg<=this.time.now){
            PlayerRojo.setVelocityX(0)
            this.tomaDecisionEncarar(Phaser.Math.Between(0,1))
            //this.tomaDecisionEncarar(1)
               
            }
          
         

    }

    if (PlayerRojo.estado=='patada'){
       // console.log('pateando')
        //// despues de un tiempo vuelve al estado de parado
    /*    if (tiempoEspera<=tiempoDeJuego){
            PlayerRojo.estado='parado'
          //  console.log("esta parado")
        }
    */       
        if ( TiempoMiliseg<=this.time.now){

            PlayerRojo.estado='parado'
               
            }

    }

    if (PlayerRojo.estado=='punch'){
       // console.log('golpeando')
         //// despues de un tiempo vuelve al estado de parado
         if ( TiempoMiliseg<=this.time.now){

            PlayerRojo.estado='parado'
               
            }
        
         
    }

    if (PlayerRojo.estado=='darMano'){
      
        ///animacion dar mano por tres segundos 

        if ( TiempoMiliseg<=this.time.now){

            PlayerRojo.estado='parado'
               
            }
      
    }
    if (PlayerRojo.estado =='espalda'){
        //// animacion dar la espalda por tres segundos
        console.log('espalda')
        if ( TiempoMiliseg<=this.time.now){

            PlayerRojo.estado='parado'
               
            }

   
    }

        
    }

    else {
        ///////// si el juego termina //////
        Musica.stop()
        if (PlayerRojo.Vida<=0) {

            this.scene.start('gana')
          
        }
        else if(PlayerVerde.vida<=0){

            this.scene.start('pierde')
        }
       

    }




// console.log(PlayerRojoAnim.anims.currentAnim.key)


    /////////// control de animaciones  //////////

    if (PlayerRojo.estado=='parado'){

        this.compruebaAnimacion('paradoRojo')
        
    }
    else if (PlayerRojo.estado=='caminar'){

        this.compruebaAnimacion('caminarRojo')
       
    }
    
    else if (PlayerRojo.estado=='hablar'){

        this.compruebaAnimacion('hablarRojo')
       
    }
    else if (PlayerRojo.estado=='encarar'){

        this.compruebaAnimacion('encararRojo')
        if(!Sonidos.locomotora.isPlaying){
            Sonidos.locomotora.play()
        }
        
       
    }
  
    else if (PlayerRojo.estado=='patada'){
       
        this.compruebaAnimacion('patearRojo')
       
    }
    else if (PlayerRojo.estado=='punch'){

        

        if(PlayerRojo.mano == 0) {

            this.compruebaAnimacion('golpearRojoD')

        }
        else {

            this.compruebaAnimacion('golpearRojoI')

        }

        
       
    }
    else if (PlayerRojo.estado=='darMano'){

        this.compruebaAnimacion('darLaMano')
        this.LogoRojo()
       
    }
    else if (PlayerRojo.estado=='espalda'){
        this.LogoRojo()
        this.compruebaAnimacion('deEspalda')
       
    }


//////////////////////////////////////////////////////////









}
   

activaSalto ()
{
    PlayerVerde.salto=true;

    if (PlayerVerde.estado!='desliz'&&PlayerVerde.estado!='RecibeGolpe'){
        PlayerVerde.estado='parado'
    }
    
    


}
cadaSegundo(){
    tiempoDeJuego=tiempoDeJuego+1
  
}

tomaDecision(resultado){
    
    if (0==resultado){

PlayerRojo.estado='encarar'
       
if (PlayerRojo.x<=PlayerVerde.x) {
    
    PlayerRojo.setVelocityX (800)
 
} else {
    
   PlayerRojo.setVelocityX (-800)
   

}

TiempoMiliseg=this.time.now+1500
    }
    else if (1==resultado){

PlayerRojo.estado='hablar'
// tiempoEspera=tiempoDeJuego+2
 TiempoMiliseg=this.time.now+2000

       
    }
     else {

        
      
        PlayerRojo.estado='caminar'
       // tiempoEspera=tiempoDeJuego+3
       TiempoMiliseg=this.time.now+2000

     }

     
    
}

tomaDecisionCaminar(resultado) {

    if (0 == resultado){
//aca 
PlayerRojo.estado='patada'
// tiempoEspera=tiempoDeJuego+3
 TiempoMiliseg=this.time.now+800


    }
    else{



    PlayerRojo.estado='punch'
    PlayerRojo.mano = Phaser.Math.Between(0,1)
   // tiempoEspera=tiempoDeJuego+3
    TiempoMiliseg=this.time.now+800

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
    TiempoMiliseg=this.time.now+3000
    
    }

    else{
    PlayerRojo.estado='espalda'
    TiempoMiliseg=this.time.now+3000
    }
  

}

compruebaAnimacion(animacion){
  

if(PlayerRojo.estado=='encarar') {

PlayerRojoAnim.anims.play(animacion, true)

}

else if (PlayerRojo.estado=='espalda'){

    PlayerRojoAnim.anims.play(animacion, true)

    if (PlayerRojo.x<=PlayerVerde.x){

        PlayerRojoAnim.flipX = true
    }
    else  {

        PlayerRojoAnim.flipX = false
    }

}
else {
        if( PlayerRojoAnim.anims.currentAnim.key!== animacion){
            PlayerRojoAnim.anims.play(animacion, true)   
        
        }

        if (PlayerRojo.x<=PlayerVerde.x){

            PlayerRojoAnim.flipX = true
        }
        else  {
    
            PlayerRojoAnim.flipX = false
        }
    }

}



colisionEncare(player,enemigo){

    if(PlayerVerde.estado!='RecibeGolpe'&& PlayerRojo.estado=='encarar'){
        PlayerVerde.estado ='RecibeGolpe'
        TiempoMiliseg=this.time.now+3000
        PlayerVerde.vida=PlayerVerde.vida-10;
        Sonidos.GolpeAcertado.play()
        enemigo.disableBody(true, true);

    }
}

colisionPuño (player,enemigo){

    if(PlayerVerde.estado!='RecibeGolpe'&& PlayerRojo.estado=='punch'){
        PlayerVerde.estado ='RecibeGolpe'
        TiempoMiliseg=this.time.now+3000
        PlayerVerde.vida=PlayerVerde.vida-20;
        Sonidos.GolpeAcertado.play()
        enemigo.disableBody(true, true);
    
    }
}

  LogoRojo() {
            
    if(PlayerRojoAnim.flipX==true){

        PlayerRojo.logoI.visible=false;
        PlayerRojo.logoD.visible=true;
    }
    else{
        PlayerRojo.logoI.visible=true;
        PlayerRojo.logoD.visible=false;
    }

}


   
}