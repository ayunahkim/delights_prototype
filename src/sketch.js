// establish global variables
let bg;
let stars = [];
let textboxes = [];
let star1,star2 = false;
let textbox = 'none';
let col1, col2;

function preload(){
  bg = loadImage('/assets/bg.png')

  for(let i=1;i<=6;i++){
    // console.log(i)
    stars[i] = loadImage('/assets/star'+str(i)+'.png')
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  noStroke();
  
  col1 = color(255,236,203);
  col1.setAlpha(150);

  col2 = color(255,169,169);
  col2.setAlpha(150);

  stars[1].resize(42,46)
  stars[2].resize(32,34)
}

function draw() {
  background(bg);

  if(!star1&&!star2){
    stars[1].resize(42,46)
    //star 1
    image(stars[1],100,windowHeight-200);

    //constellation 1
    image(stars[2],windowWidth-420,100);
    image(stars[2],windowWidth-380,50);
    image(stars[2],windowWidth-320,70);
  } else if(star1){
    stars[1].resize(74,86)
    image(stars[1],windowWidth/2-37,windowHeight/2-43);
  }

  

  textBoxes();

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = col1;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function mouseClicked(){
  if(star1||star2){
    star1 = false;
    star2 = false;
  }  else {
      if(mouseX>=100&&mouseX<=142&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
        star1 = true;
      }
      else if(mouseX>=windowWidth-420&&mouseX<=windowWidth-388&&mouseY>=100&&mouseY<=134){
        star2 = true;
      }
      else if(mouseX>=windowWidth-380&&mouseX<=windowWidth-348&&mouseY>=50&&mouseY<=84){
        star2 = true;
      }
      else if(mouseX>=windowWidth-320&&mouseX<=windowWidth-288&&mouseY>=70&&mouseY<=104){
        star2 = true;
      }
  }
  
}

function textBoxes(){
  if(star1){
    fill(col1);
    rect(windowWidth/2,windowHeight/2,400,250,20);
    fill('white')
    text('seeing the bag charms on different strangers\nswing in sync while walking',windowWidth/2,windowHeight/2+80);
  }
  else if(star2){
    fill(col2);
    rect(windowWidth/2,windowHeight/2,400,150,20);
    fill('white')
    text('people using software to do something it\'s not meant to do',windowWidth/2,windowHeight/2);
  }
}
