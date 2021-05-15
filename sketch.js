//Create variables here
var dog, happyDog;
var database, foodS, foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(happyDogImg);
}
  drawSprites()
  //add styles here
  fill("yellow");
  textSize(20);
text("food stock is " + foodS, 150, 200);


}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if (x<=0 ){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



