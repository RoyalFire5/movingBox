var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "red";
}

function draw() {
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
  } else if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5
  } else if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
  }


  drawSprites();
}