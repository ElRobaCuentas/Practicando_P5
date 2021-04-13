var bird;
var pipes = [];

function setup() {
    // put setup code here
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    // put drawing code here
    background(0);
    bird.update();
    bird.show();

    // GENERA NUEVOS TUBOS
    if (frameCount % 100 === 0) { //multiplos de 100
        pipes.push(new Pipe()); //genera un nuevo tubo
    }
    

    // AQUI OCURRE TODAS LOS METODOS DEL TUBO
    for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();  

        if(pipes[i].hits(bird)){
            console.log("HIT");
            console.log("GAME OVER");
        }      

        if(pipes[i].offscreen()){
            pipes.splice(i, 1); //elimina el tubo q ya termino de reccorer
        }      
    } 
} 

function keyPressed() {
    if( key == ' '){
        bird.up(); 
    }
}  

    

  