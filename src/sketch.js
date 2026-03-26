// establish global variables
let bg;
let stars = [];
let glows = [];
let glow1,glow2 = false;
let constellations = [];
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
  constellations[1] = loadImage('/assets/constellation1.png')

  glows[1] = loadImage('/assets/glow1.png')
  glows[2] = loadImage('/assets/glow2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  noStroke();
  
  col1 = color(255,236,203);
  col1.setAlpha(170);

  col2 = color(255,169,169);
  col2.setAlpha(170);

  stars[1].resize(42,46)
  constellations[1].resize(236,217)

}

function draw() {
  background(bg);

  if(!star1&&!star2){
    if(glow1){
      tint(255,80);
      image(glows[1],92,windowHeight-208);
      tint(255,255);
    }
    if(glow2){
      tint(255,100);
      image(glows[2],117,68);
      tint(255,255);
    }
  }

  image(stars[1],100,windowHeight-200);
  image(constellations[1],150,100);

  textBoxes();

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = col1;

  // console.log(mouseX,mouseY)
  hoverGlow();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function hoverGlow(){
  if(mouseX>=100&&mouseX<=142&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
    glow1 = true;
  }
  else if(mouseX>=150&&mouseX<=386&&mouseY>=100&&mouseY<=238){
    glow2 = true;
  }
  else if(mouseX>=330&&mouseX<=386&&mouseY>=238&&mouseY<=317){
    glow2 = true;
  }
  else{
    glow1 = false;
    glow2 = false;
  }
}

function mouseClicked(){
  if(star1||star2){
    star1 = false;
    star2 = false;
  }  else {
      if(mouseX>=100&&mouseX<=142&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
        star1 = true;
      }
      else if(mouseX>=150&&mouseX<=386&&mouseY>=100&&mouseY<=238){
        star2 = true;
      }
      else if(mouseX>=330&&mouseX<=386&&mouseY>=238&&mouseY<=317){
        star2 = true;
      }
  }
  
}

function textBoxes(){
  if(star1){
    background(0,0,20,80)
    fill(col1);
    rect(windowWidth/2,windowHeight/2,400,250,20);
    fill('white')
    text('seeing the bag charms on different strangers\nswing in sync while walking',windowWidth/2,windowHeight/2+80);
  }
  else if(star2){
    background(0,0,20,80)
    fill(col2);
    rect(windowWidth/2,windowHeight/2,400,150,20);
    fill('white')
    text('people using software to do something it\'s not meant to do',windowWidth/2,windowHeight/2);
  }
}
