
var ball, database, position;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(400,400);
    ball = createSprite(200,200,20,20);
    ball.shapeColor = "#00e1d0";

    var ballPos = database.ref('ball/position');
    ballPos.on("value", (data)=>{
        position = data.val();
        console.log(position);

        ball.x = position.x;
        ball.y = position.y;

        console.log(position);
    })

}

function writePosition(c, d){
    database.ref('ball/position').update({
        'x': position.x + c,
        'y': position.y + d
    })
}

function draw(){
    background(0);

    if(position!== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }




    drawSprites();
}
}

 changePosition =(a,b)=>{
    ball.x = ball.x + a;
    ball.y = ball.y + b;

}