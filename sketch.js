  var boy, boyImg;
  var path, pathImg;
  var rightBoundary, leftBoundary;
    
    
      //imagens pré-carregadas
      function preload (){
    
      pathImg = loadImage("path.png");
    
      boyImg = loadAnimation ("Runner-1.png","Runner-2.png");
      }
    
    
    
    function setup(){
      createCanvas(400,400);
      //crie sprite aqui
     
      path = createSprite(200,200);
      path.addImage(pathImg);
      path.scale=1.2;
      path.velocityY = 4;

      boy = createSprite(180,340,30,30);
      boy.addAnimation("jakerunning",boyImg);
      boy.scale = 0.08;
    
      leftBoundary = createSprite(0,0,100,800);
      leftBoundary.visible = false;       
    
      rightBoundary = createSprite(410,0,100,800);
      rightBoundary.visible = false;
    }
    
    function draw() {
      background(0);
    
    boy.x = World.mouseX;
    
    edges = createEdgeSprites();
    
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
    if(path.y > 400){
    path.y = height/2;
    }

     drawSprites();

    }
    