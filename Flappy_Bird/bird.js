function Bird() {
    this.y = height/2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -10;
    this.velocity = 1;

    // CREACION DE LA FIGURA
    this.show = function() {
        fill(255);
        // circle(100, 100, 128);
        arc(this.x, this.y, 32, 32, 45, PI+HALF_PI+QUARTER_PI);
    }

    // SUBIDA O SALTO
    this.up = function() {
        this.velocity += this.lift;     
        // print(this.velocity);  
    }
    
    // CAIDA
    this.update = function() {
        // this.velocity = this.velocity + this.gravity
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity; //aumenta el ejeY 60 veces/seg y actualiza la funcion show()

        if(this.y > height){ // 301.44...600 > 600
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0){ // 301.44...600 < 0
            this.y = 0;
            this.velocity = 0;
        }
    }
}