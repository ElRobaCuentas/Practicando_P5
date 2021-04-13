function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;

    this.highlight = false;
    
    // VERIFICA SI EL PAJARO CHOCA CON EL TUBO
    this.hits = function(bird){
        if(bird.y < this.top || bird.y > height - this.bottom){ //verifica si el pagaro esta dentro del height del tubo (con esto verifica si choca con algun tubo)
            if(bird.x > this.x && bird.x < this.x + this.w){ // aqui verifica el ancho del tubo si toca con el pajaro
                this.highlight = true; //para que el tubo cambie de color
                return true; //retorna un bool y acaba la funcion
            }
        }
        this.highlight = false;
        return false;
    }

    // CREACION DE LOS TUBOS
    this.show = function() {
        fill(255); //color blanco
        if(this.highlight){
            fill(255, 0, 0); //color rojo
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    //SIMULACION DE MOVIMIENTO (lo que se mueve no es el lienzo sino los tubos (y el pajaro esta en su mismo lugar saltando))
    this.update = function() {
        this.x -= this.speed;
    }

    //INDICA EL FINAL DEL RECORRIDO DE UN TUBO POR TODO EL LIENZO (retorna un boolean)
    this.offscreen = function() {
        if(this.x < -this.w){ // 400...-20... < -20 //cuando acabe de recorrer el ancho del lienzo hasta ahi cumple
            return true;
        } else {
            return false;
        }
    }

}