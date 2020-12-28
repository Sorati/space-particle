import "./styles/main.scss";
import PoolManager from './classes/pool-manager'
import Particles from './classes/particles'


let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    // particles = [],
    properties = {
        bgColor: 'rgba(0, 0, 0, 0)',
        particleColor: 'rgba(250, 250, 40, 1)',
        particleRadius: 13,
        particleCount: 100,
        particleMaxVelocity: 0.03,
        // lifetime: 5000
    }

canvas.width = innerWidth
canvas.height = innerHeight

document.querySelector('body').appendChild(canvas);

const poolManager = new PoolManager()
const star = new Particles(canvas, properties.particleMaxVelocity, properties.particleRadius)

window.onresize = function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // console.log(canvas)
}

/**************************************************/

function reDrowBackground() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// function reDrowParticles(){
//     for(let i in particles){
//         particles[i].position();
//         particles[i].reDrow();
//     }
// }

// function loop(){
//     reDrowBackground()
//     reDrowParticles();
//     requestAnimationFrame(loop);
// }

// function init(){
//     for(let i = 0; i < properties.particleCount; i++){
//         particles.push(new Particle);
//     }
//     loop();
// }