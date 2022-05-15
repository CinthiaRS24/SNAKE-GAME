import Square from "./Square";

export default class {
    constructor() {
        this.head = new Square(0, 0)
        this.body = []
    }

    addElement(element) {
        this.body.push(element);
    }

    move(dx, dy) {
        // el cuerpo de la serpiente siga a la cabeza de la serpiente
        for (let i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        if (this.body.length >= 1) {
            this.body[0].x = this.head.x;
            this.body[0].y = this.head.y;
        }

        // actualizar las coordenadas de la cabeza de la serpiente
        this.head.move(dx, dy);
    }

    getLastElement() {
        if (this.body.length >= 1) {
            return this.body[this.body.length-1];
        } else {
            return this.head;
        }
    }

    hasCollided() {
        for (let i = 0; i < this.body.length; i++) {
            if (this.body[i].checkCollision(this.head)) {
                return true;
            }
        }
    }

    hasBrokenTheLimits(x1, x2, y1, y2) {
        const topCollision = (this.head.y < y1);
        const bottomCollision = (this.head.y > y2);
        const leftCollision = (this.head.x < x1);
        const rightCollision = (this.head.x > x2);
        if (topCollision || bottomCollision || rightCollision || leftCollision) {
            return true
        }
    }

    checkFullCollision(position) {
        // comparar las  coordenadas del alimento con las coordenadas de un elem del cuerpo
	    for (let i = 0; i < this.body.length; i++) {
            if (this.body[i].checkCollision(position)) {
                return true;
            }
	    }

        // comparar las  coordenadas del alimento con las coordenadas de la cabeza
        if (this.head.checkCollision(position)) {
                return true;
            }
    }

    reset() {
        this.head.x = 0;
        this.head.y = 0;
        this.body.length = 0;
    }
}