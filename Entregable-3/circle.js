class circle extends figure {
    constructor(posX,posY,radio,fill,context){
        super(posX,posY,fill,context)
        this.radio=radio;
    }

    draw(){
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX,this.posY,this.radio, 0, 2 *Math.PI);
        this.ctx.fill();

        if(this.resaltado===true){
            this.ctx.strokeStyle=this.resaltadoEstilo;
            this.ctx.lineWidth =5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }
    getRadio(){
        return this.radio;
    }
    isPointInside(x,y){
        let _x=this.posX - x;
        let _y=this.posY - y;
        return Math.sqrt(_x *_x+_y *_y)<this.radio;
    }
}