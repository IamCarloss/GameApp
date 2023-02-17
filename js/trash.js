class PauseScene extends Phaser.Scene {
    create() {
      // Agregar texto y botón de reanudar
      const resumeButton = this.add.text(400, 300, 'Reanudar', { fontSize: '32px', fill: '#fff' });
      resumeButton.setInteractive();
      resumeButton.on('pointerdown', () => {
        this.scene.resume('MainScene');
      });
  
      this.add.text(400, 200, 'Juego pausado', { fontSize: '48px', fill: '#fff' });
    }
  }
  

/*   create() {
    // ...
  
    // Agregar un controlador de eventos para detectar cuando se pausa la escena
    this.events.on('pause', () => {
      this.scene.launch('PauseScene');
    });
  } */
  






  function collectStar (player, star) {
    star.disableBody(true, true);
  
    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);
  
    if (stars.countActive(true) === 0) {
      //  A new batch of stars to collect
      stars.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });
  
      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
  
      var bomb = bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      bomb.allowGravity = false;
    }
    
    finalScore = score;
  }