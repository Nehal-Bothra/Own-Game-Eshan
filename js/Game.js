class Game {
    constructor() {

    }

getState() {
 var gameStateRef = database.ref("gameState");
gameStateRef.on("value", function(data) {
gameState = data.val();
  });
}
update(state){
    database.ref("/").update({
        gameState: state
      });
}

start() {
    form = new Form()
    form.display()

    player = new Player();
    playerCount = player.getCount();

    ghost1 = createSprite(width / 2 - 50, height - 100);
   

    ghost2 = createSprite(width / 2 + 100, height - 100);
    

    ghosts = [ghost1, ghost2]

}
handleElements(){
  form.hide();
}
play() {
  this.handleElements()
drawSprites();
}
}