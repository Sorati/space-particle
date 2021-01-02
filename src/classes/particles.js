export default class Particles{
    constructor(canvas = null, maxVelocity = 0.1, particleRadius = 3, particleColor = 'rgba(250, 250, 40, 1)'){
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.maxVelocity = maxVelocity
        this.particleRadius = particleRadius
        this.particleColor = particleColor

        this.x = Math.random()*this.canvas.width;
        this.y = Math.random()*this.canvas.height;

        this.velocityX = Math.random()*(this.maxVelocity*2) - this.maxVelocity
        this.velocityY = Math.random()*(this.maxVelocity*2) - this.maxVelocity
    }

    position(){
        if ((this.x > this.canvas.width || this.x < 0)  || (this.y > this.canvas.height || this.y < 0 )){
            this.x = Math.random()*this.canvas.width
            this.velocityX = Math.random()*(this.maxVelocity*2) - this.maxVelocity

            this.y = Math.random()*this.canvas.height
            this.velocityY = Math.random()*(this.maxVelocity*2) - this.maxVelocity
        }

        this.x += this.velocityX
        this.y += this.velocityY

        // console.log(`X:${this.x} Y:${this.y}`)
    }

    reDrow(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.particleRadius, 0, Math.PI*2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.particleColor;
        this.ctx.fill();
    }
}