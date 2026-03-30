// this code is super messy i'm so sorry whoever sees it
// not my best code since this was supposed to be a quick prototype

let bg,col1,col2;

let stars = [];
let glows = [];
let constellations = [];
let const1stars = [];
let starImgs = [];

let star1 = false;
let star2 = false;
let star3 = false;
let star4 = false;
let star5 = false;

let const1 = false;
let const2 = false;

let const1star1 = false;
let const1star2 = false;
let const1star3 = false;
let const1star4 = false;

let const2star1 = false;
let const2star2 = false;
let const2star3 = false;

let glow1 = false;
let glow2 = false;
let glow3 = false;
let glow4 = false;
let glow5 = false;
let glow6 = false;
let glow7 = false;

function preload(){
  bg = loadImage('/assets/bg.png')

  for(let i=1;i<=7;i++){
    stars[i] = loadImage('/assets/star'+str(i)+'.png')
  }
  constellations[1] = loadImage('/assets/constellation1.png')
  constellations[2] = loadImage('/assets/constellation2.png')

  for(let i=1;i<=6;i++){
    glows[i] = loadImage('/assets/glow'+str(i)+'.png')
  }

  const1stars[1] = loadImage('/assets/pokopiacalculator.gif');
  starImgs[1] = loadImage('/assets/charms.gif');
  starImgs[4] = loadImage('/assets/alien.gif')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  noStroke();
  textSize(14)
  
  col1 = color(255,236,203);
  col1.setAlpha(170);

  col2 = color(255,169,169);
  col2.setAlpha(170);

  stars[1].resize(51,55)
  stars[2].resize(79,86)
  stars[3].resize(51,55)
  stars[4].resize(51,55)
  stars[5].resize(51,55)
  stars[6].resize(79,86)
  constellations[1].resize(236,217)

  const1stars[1].resize(300,300)
  starImgs[1].resize(500,300)
  starImgs[4].resize(432,324)
}

function draw() {
  background(bg);
  console.log(windowWidth,windowHeight);
  // console.log(mouseX,mouseY);

  // if nothing is active, glow
  if(!star1&&!const1&&!star2&&!star3&&!const2&&!star4){
    if(glow1){
      tint(255,80);
      image(glows[1],windowWidth/2-668,windowHeight-211);
      tint(255,255);
    }
    else if(glow2){
      tint(255,100);
      image(glows[2],windowWidth*.077,windowHeight*.12);
      tint(255,255);
    }
    else if(glow3){
      tint(255,80);
      image(glows[3],windowWidth/2-271,windowHeight-161);
      tint(255,255);
    }
    else if(glow4){
      tint(255,80);
      image(glows[4],windowWidth/2-111,windowHeight/2-212);
      tint(255,255);
    }
    else if(glow5){
      tint(255,80);
      image(glows[5],windowWidth/2-14,windowHeight/2-14);
      tint(255,255);
    }
    else if(glow6){
      tint(255,80);
      image(glows[6],windowWidth/2+308,windowHeight/2-112);
      tint(255,255);
    }
  }

  image(stars[1],windowWidth*.066,windowHeight-200);
  image(constellations[1],windowWidth*.099,windowHeight*.17);
  image(stars[3],windowWidth/2-260,windowHeight-150);
  image(stars[4],windowWidth/2-100,windowHeight/2-200);
  image(constellations[2],windowWidth/2,windowHeight/2);
  image(stars[5],windowWidth/2+320,windowHeight/2-100);

  textBoxes();

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = col1;

  hoverGlow();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function hoverGlow(){
  if(mouseX>=windowWidth*.006&&mouseX<=windowWidth*.094&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
    glow1 = true;
  }
  else if(mouseX>=windowWidth*.099&&mouseX<=windowWidth*.255&&mouseY>=windowHeight*.17&&mouseY<=windowHeight*.409){
    glow2 = true;
  }
  else if(mouseX>=windowWidth*.218&&mouseX<=windowWidth*.255&&mouseY>=windowHeight*.409&&mouseY<=windowHeight*.54){
    glow2 = true;
  }
  else if(mouseX>=windowWidth/2-260&&mouseX<=windowWidth/2-209&&mouseY>=windowHeight-150&&mouseY<=windowHeight-95){
    glow3 = true;
  }
  else if(mouseX>=windowWidth/2-100&&mouseX<=windowWidth/2-49&&mouseY>=windowHeight/2-200&&mouseY<=windowHeight/2-145){
    glow4 = true;
  }
  else if(mouseX>=windowWidth/2&&mouseX<=windowWidth/2+232&&mouseY>=windowHeight/2&&mouseY<=windowHeight/2+152){
    glow5 = true;
  }
  else if(mouseX>=windowWidth/2+320&&mouseX<=windowWidth/2+371&&mouseY>=windowHeight/2-100&&mouseY<=windowHeight/2-45){
    glow6 = true;
  }
  else{
    glow1 = false;
    glow2 = false;
    glow3 = false;
    glow4 = false;
    glow5 = false;
    glow6 = false;
  }
}

function mouseClicked(){
  //if star 1 is active
  if(star1){
    star1 = false;
  }  
  // if constellation 1 is active
  else if(const1){
    //if a star in constellation is not active
    if(!const1star1&&!const1star2&&!const1star3&&!const1star4){
      //if mouse is on const 1 star 1
      if(mouseX>=windowWidth/2-400&&mouseX<=windowWidth/2-321&&mouseY>=windowHeight/2-100&&mouseY<=windowHeight/2-14){
        const1star1 = true;
      }
      //if mouse is on const 1 star 2
      else if(mouseX>=windowWidth/2-220&&mouseX<=windowWidth/2-141&&mouseY>=windowHeight/2-300&&mouseY<=windowHeight/2-214){
        const1star2 = true;
      }
      //if mouse is on const 1 star 3
      else if(mouseX>=windowWidth/2+80&&mouseX<=windowWidth/2+159&&mouseY>=windowHeight/2-200&&mouseY<=windowHeight/2-114){
        const1star3 = true;
      }
      //if mouse is on const 1 star 4
      else if(mouseX>=windowWidth/2+280&&mouseX<=windowWidth/2+359&&mouseY>=windowHeight-300&&mouseY<=windowHeight-211){
        const1star4 = true;
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
    else if(const1star3){
      const1star3 = false;
    }
    else if(const1star4){
      const1star4 = false;
    }
  } 
  else if(star2){
    star2=false;
  }
  else if(star3){
    star3 = false;
  }
  else if(const2){
    if(!const2star1&&!const2star2&&!const2star3){
      if(mouseX>=windowWidth/2-380&&mouseX<=windowWidth/2-301&&mouseY>=windowHeight/2-120&&mouseY<=windowHeight/2-34){
        const2star1 = true;
      }
      else {
        const2 = false;
      }
    }
    else if(const2star1){
      const2star1 = false;
    }
  }
  else if(star4){
    star4 = false;
  }
  else {
      if(mouseX>=windowWidth*.006&&mouseX<=windowWidth*.094&&mouseY>=windowHeight-200&&mouseY<=windowHeight-154){
        star1 = true;
      }
      else if(mouseX>=windowWidth*.099&&mouseX<=windowWidth*.255&&mouseY>=windowHeight*.17&&mouseY<=windowHeight*.409){
        const1 = true;
      }
      else if(mouseX>=windowWidth*.218&&mouseX<=windowWidth*.255&&mouseY>=windowHeight*.409&&mouseY<=windowHeight*.54){
        const1 = true;
      }
      else if(mouseX>=windowWidth/2-260&&mouseX<=windowWidth/2-209&&mouseY>=windowHeight-150&&mouseY<=windowHeight-95){
        star2 = true;
      }
      else if(mouseX>=windowWidth/2-100&&mouseX<=windowWidth/2-49&&mouseY>=windowHeight/2-200&&mouseY<=windowHeight/2-145){
        star3 = true;
      }
      else if(mouseX>=windowWidth/2&&mouseX<=windowWidth/2+232&&mouseY>=windowHeight/2&&mouseY<=windowHeight/2+152){
        const2 = true;
      }
      else if(mouseX>=windowWidth/2+320&&mouseX<=windowWidth/2+371&&mouseY>=windowHeight/2-100&&mouseY<=windowHeight/2-45){
        star4 = true;
      }
  }
  
}

function textBoxes(){
  if(star1){
    background(0,0,50,180)
    fill('white')
    image(starImgs[1],windowWidth/2-250,windowHeight/2-150);
    text('seeing the bag charms on different strangers\nswing in sync while walking',windowWidth/2,windowHeight/2+170);
  }
  else if(const1){
    background(0,0,50,180)
    fill(col2);
    rect(windowWidth/2,windowHeight/2,480,150,20);
    fill('white')
    text('people using a thing to do something else it\'s not originally meant to do',windowWidth/2,windowHeight/2-10);
    text('a.k.a stretching the limits of what something can do',windowWidth/2,windowHeight/2+10);

    image(stars[2],windowWidth/2-400,windowHeight/2-100);
    image(stars[2],windowWidth/2-220,windowHeight/2-300);
    image(stars[2],windowWidth/2+80,windowHeight/2-200);
    image(stars[2],windowWidth/2+280,windowHeight-300);

    if(const1star1){
      background(0,0,50,180)
      fill('white')
      image(const1stars[1],windowWidth/2-150,windowHeight/2-150);
      text('making a working calculator in a cutesy Pokemon game',windowWidth/2,windowHeight/2+170);
      image(stars[2],windowWidth/2-400,windowHeight/2-100);
    } 

    else if(const1star2){
      background(0,0,50,180)
      fill('white')
      text('drawing visual art in a MIDI program using notes',windowWidth/2,windowHeight/2);
      image(stars[2],windowWidth/2-220,windowHeight/2-300);
    }

    else if(const1star3){
      background(0,0,50,180)
      fill('white')
      image(stars[2],windowWidth/2+80,windowHeight/2-200);
      text('making a giant keyboard in Minecraft using sheep and mine carts',windowWidth/2,windowHeight/2);
    }

    else if(const1star4){
      background(0,0,50,180)
      fill('white')
      image(stars[2],windowWidth/2+280,windowHeight-300);
      text('building 24-bit RAM in an open-world RPG game that solves addition',windowWidth/2,windowHeight/2);
    }
  }
  else if(star2){
    background(0,0,50,180)
    fill('white')
    // image(star1img,windowWidth/2-250,windowHeight/2-150);
    text('a friend reaching out to say something reminded them of me',windowWidth/2,windowHeight/2+170);
  }
  else if(star3){
    background(0,0,50,180)
    fill('white')
    // image(star1img,windowWidth/2-250,windowHeight/2-150);
    text('receiving my monthly artist\'s snail mail',windowWidth/2,windowHeight/2+170);
  }
  else if(const2){
    background(0,0,50,180)
    fill('#D5E9F1');
    rect(windowWidth/2,windowHeight/2,400,120,20);
    fill('#635852')
    text('admiring the variety and artistic spirit of customization',windowWidth/2,windowHeight/2);

    image(stars[6],windowWidth/2-380,windowHeight/2-120);
    image(stars[6],windowWidth/2-220,windowHeight/2+50);
    image(stars[6],windowWidth/2+80,windowHeight/2+100);

    if(const2star1){
      background(0,0,50,180)
      fill('white')
      // image(const1stars[1],windowWidth/2-150,windowHeight/2-150);
      text('making custom miis with face paint drawing with only a finger or stylus',windowWidth/2,windowHeight/2+170);
      image(stars[6],windowWidth/2-380,windowHeight/2-120);
    } 
  }
  else if(star4){
    background(0,0,50,180)
    fill('white')
    image(starImgs[4],windowWidth/2-216,windowHeight/2-162);
    text('this one crunchy low quality silly gif i love',windowWidth/2,windowHeight/2+200);
  }
}