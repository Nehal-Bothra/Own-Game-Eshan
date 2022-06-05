class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Username")
      this.playButton = createButton("Play")
      this.greeting = createElement("h2");
    }


setElementsPosition() {
  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 30, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

setElementsStyle() {
  this.input.class("loginInput")
    this.playButton.class("customButton");
  }

hide() {
    this.playButton.hide()
    this.input.hide()
    this.greeting.hide()
}


handleMousePressed() {
  this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
    var message = `
    Hello ${this.input.value()}
    </br>wait for another player to join...`;
    this.greeting.html(message);
    playerCount += 1;
    player.name = this.input.value();
    player.index = playerCount;
    // player.addPlayer();
    player.updateCount(playerCount);
    // player.getDistance();
  });
}

display() {
  this.setElementsPosition();
  this.setElementsStyle();
  this.handleMousePressed();
}

}