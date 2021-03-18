var cat;
var catImg;
var catImg2;

var mouse;
var mouseImg;
var mouseImg2;

var garden;

function preload() {
    //load the images here
 garden=loadImage("images/garden.png");
 
 catImg=loadAnimation("images/cat2.png","images/cat3.png");
  mouseImg=loadImage("images/mouse1.png");

  catImg2=loadImage("images/cat4.png");
  mouseImg2=loadImage("images/mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
  cat=createSprite(600,650,20,20);
  cat.addImage(catImg2);
  cat.scale=0.3;

  mouse=createSprite(100,650,20,20);
  mouse.addImage(mouseImg2);
  mouse.scale=0.19;

}

function draw() {
    background(garden);

    if(cat.x-mouse.x<cat.width/2+mouse.width/2
        &&mouse.x-cat.x<cat.width/2+mouse.width/2)
        {
          mouse.changeImage(mouseImg);
        }
        else
        {
          mouse.changeImage(mouseImg2);
        }

cat.depth=mouse.depth;
mouse.depth=mouse.depth-1;

    if(keyDown(LEFT_ARROW))
    {
cat.velocityX=-3;
cat.addAnimation("catRunning",catImg);
cat.changeAnimation("catRunning");
    }

    if(keyDown(RIGHT_ARROW))
    {
        cat.velocityX=3;
cat.addAnimation("catRunning",catImg);
cat.changeAnimation("catRunning");
    }
    
    text(mouseX+','+mouseY,10,45);
        
     drawSprites();
}
