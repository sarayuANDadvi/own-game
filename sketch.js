var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6
var bg, bgImg
var healingPotion1, healingPotion2
var player1, player2
var zombieGroup

function preload(){
    zombie1 = loadImage("assets/zombie 1.png");
    zombie2 = loadImage("assets/zompie 2.png");
    zombie3 = loadImage("assets/zombie 3.png");
    zombie4 = loadImage("assets/zombie 4.png");
    zombie5 = loadImage("assets/zombie 5.png");
    zombie6 = loadImage("assets/zombie 6.png");
    bgImg = loadImage("assets/bg.jpg");
    healingPotion1 = loadImage("assets/healing potion 1 and 2.png");
    healingPotion2 = loadImage("assets/healing potion 1 and 2.png");
    player1 = loadImage("assets/player 1.png");
    player2 = loadImage("assets/player 2.png");
}

function setup() { 
    createCanvas(windowWidth, windowHeight);
    //adding the background image
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20); 
    bg.addImage (bgImg); 
    bg.scale = 1.1 
    
    //creating the player sprite 
    player = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    player.addImage(player1); 
    player.scale = 0.3;

    zombie_1 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_1.addImage(zombie1); 
    zombie_1.scale = 0.3;
    zombie_1.velocity = 0.5

    zombie_2 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_2.addImage(zombie2); 
    zombie_2.scale = 0.3;
    zombie_2.velocity.x = 0.5

    zombie_3 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_3.addImage(zombie3); 
    zombie_3.scale = 0.3;
    zombie_3.velocity.x = 0.5

    zombie_4 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_4.addImage(zombie4); 
    zombie_4.scale = 0.3;
    zombie_4.velocity.x = 0.5

    zombie_5 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_5.addImage(zombie5); 
    zombie_5.scale = 0.3;
    zombie_5.velocity.x = 0.5

    zombie_6 = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    zombie_6.addImage(zombie6); 
    zombie_6.scale = 0.3;
    zombie_6.velocity.x = 0.5

    zombieGroup = new Group();
}

function draw(){
    background(bg);

    zombie1.addImage(zombieGroup);
    zombie2.addImage(zombieGroup);
    zombie3.addImage(zombieGroup);
    zombie4.addImage(zombieGroup);
    zombie5.addImage(zombieGroup);
    zombie6.addImage(zombieGroup);

    drawSprites();
}