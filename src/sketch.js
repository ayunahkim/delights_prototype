// establish global variables
let bg;
let stars = [];
let glows = [];
let glow1,glow2 = false;
let constellations = [];
let textboxes = [];
let star1,const1 = false;
let textbox = 'none';
let col1, col2;
let const1star1 = false;
let const1star2 = false;

let const1stars = [];

function preload(){
  bg = loadImage('/assets/bg.png')

  for(let i=1;i<=6;i++){
    // console.log(i)
    stars[i] = loadImage('/assets/star'+str(i)+'.png')
  }
  constellations[1] = loadImage('/assets/constellation1.png')

  glows[1] = loadImage('/assets/glow1.png')
  glows[2] = loadImage('/assets/glow2.png')

  const1stars[1] = loadImage('/assets/pokopiacalculator.gif');
  const1stars[2] = loadImage('/assets/charms.gif');
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

  stars[1].resize(51,55)
  stars[2].resize(79,86)
  constellations[1].resize(236,217)

  const1stars[1].resize(300,300)
  const1stars[2].resize(500,300)
}

function draw() {
  background(bg);
  // console.log(mouseX,mouseY)

  // if nothing is active, glow
  if(!star1&&!const1){
    if(glow1){
      tint(255,80);
      image(glows[1],windowWidth/2-668,windowHeight-211);
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
  console.log("const1: "+const1);
  console.log("const1star1: "+const1star1);
  console.log("const1star2: "+const1star2);
  //if star 1 is active
  if(star1){
    star1 = false;
  }  
  // if constellation 1 is active
  else if(const1){
    //if a star in constellation is not active
    if(!const1star1&&!const1star2){
      //if mouse is on const 1 star 1
      if(mouseX>=windowWidth/2-400&&mouseX<=windowWidth/2-321&&mouseY>=windowHeight/2-100&&mouseY<=windowHeight/2-14){
        const1star1 = true;
      }
      //if mouse is on const 1 star 2
      else if(mouseX>=windowWidth/2-220&&mouseX<=windowWidth/2-141&&mouseY>=windowHeight/2-300&&mouseY<=windowHeight/2-214){
        console.log("trueeee")
        const1star2 = true;
      }
      // else, close out of constellation 1
      else {
        const1 = false;
      }
    }
    else if(const1star1){
      const1star1 = false;
    }
    else if(const1star2){
      const1star2 = false;
    }
  } 
  else {
      if(mouseX>=100&&mouseX<=142&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
        star1 = true;
      }
      else if(mouseX>=150&&mouseX<=386&&mouseY>=100&&mouseY<=238){
        const1 = true;
      }
      else if(mouseX>=330&&mouseX<=386&&mouseY>=238&&mouseY<=317){
        const1 = true;
      }
  }
  
}

function textBoxes(){
  if(star1){
    background(0,0,50,180)
    // fill(col1);
    // rect(windowWidth/2,windowHeight/2,400,250,20);
    fill('white')
    image(const1stars[2],windowWidth/2-250,windowHeight/2-150);
    text('seeing the bag charms on different strangers\nswing in sync while walking',windowWidth/2,windowHeight/2+180);
  }
  else if(const1){
    background(0,0,50,180)
    fill(col2);
    rect(windowWidth/2,windowHeight/2,400,150,20);
    fill('white')
    text('people using a thing to do something else it\'s not meant to do',windowWidth/2,windowHeight/2-10);
    text('a.k.a stretching the limits of what something can do',windowWidth/2,windowHeight/2+10);

    image(stars[2],windowWidth/2-400,windowHeight/2-100);
    image(stars[2],windowWidth/2-220,windowHeight/2-300);
    image(stars[2],windowWidth/2+80,windowHeight/2-200);
    image(stars[2],windowWidth/2+240,windowHeight-300);
  }
  
  if(const1star1){
      background(0,0,50,180)
      fill('white')
      image(const1stars[1],windowWidth/2-150,windowHeight/2-150);
      text('making a working calculator in Pokemon Pokopia',windowWidth/2,windowHeight/2+170);
      image(stars[2],windowWidth/2-400,windowHeight/2-100);
  } 

  if(const1star2){
    background(0,0,50,180)
    fill('white')
    image(const1stars[1],windowWidth/2-150,windowHeight/2-150);
    text('making a working calculator in Pokemon Pokopia',windowWidth/2,windowHeight/2+170);
    image(stars[2],windowWidth/2-220,windowHeight/2-300);
  }
}

