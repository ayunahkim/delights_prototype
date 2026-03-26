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
let const1 = false;

let const1star1;

function preload(){
  bg = loadImage('/assets/bg.png')

  for(let i=1;i<=6;i++){
    // console.log(i)
    stars[i] = loadImage('/assets/star'+str(i)+'.png')
  }
  constellations[1] = loadImage('/assets/constellation1.png')

  glows[1] = loadImage('/assets/glow1.png')
  glows[2] = loadImage('/assets/glow2.png')

  const1star1 = loadImage('/assets/pokopiacalculator.gif');
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
  stars[2].resize(66,71)
  constellations[1].resize(236,217)

  const1star1.resize(300,300)

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
  if(star1){
    star1 = false;
  }  else if(star2&&!const1){
    if(mouseX>=80&&mouseX<=146&&mouseY>=180&&mouseY<=251){
      const1 = true;
    }else {
      star2 = false;
    }
  } else if(star2&&const1){
    const1 = false;
  }
  else {
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
    background(0,0,50,180)
    fill(col1);
    rect(windowWidth/2,windowHeight/2,400,250,20);
    fill('white')
    text('seeing the bag charms on different strangers\nswing in sync while walking',windowWidth/2,windowHeight/2+80);
  }
  else if(star2){
    background(0,0,50,180)
    fill(col2);
    rect(windowWidth/2,windowHeight/2,400,150,20);
    fill('white')
    text('people using software to do something it\'s not meant to do',windowWidth/2,windowHeight/2);

    image(stars[2],80,180);
    image(stars[2],240,60);
    image(stars[2],460,130);
    image(stars[2],590,370);
  }
  
  if(const1){
      background(0,0,50,180)
      // fill(col2);
      // rect(windowWidth/2,windowHeight/2,400,350,20);
      fill('white')
      image(const1star1,windowWidth/2-150,windowHeight/2-150);
      text('making a working calcualtor in Pokemon Pokopia',windowWidth/2,windowHeight/2+170);
      image(stars[2],80,180);
  } 
}

