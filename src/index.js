import "./styles/main.scss";
import PoolManager from './classes/pool-manager'
import Particles from './classes/particles'


let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    properties = {
        bgColor: 'rgba(0, 0, 0, 0)',
        particleColor: 'rgba(250, 250, 40, 1)',
        particleRadius: 3,
        particleCount: 100,
        particleMaxVelocity: 0.05
    }

canvas.width = innerWidth
canvas.height = innerHeight


document.querySelector('body').appendChild(canvas);
document.querySelector('#count').value = properties.particleCount
document.querySelector('#velocity').value = properties.particleMaxVelocity
document.querySelector('#count').oninput = handleChangeUpdateProperties
document.querySelector('#velocity').oninput = handleChangeUpdateProperties


const poolManager = new PoolManager()
poolManager.create('stars', properties.particleCount, Particles, [canvas, properties.particleMaxVelocity, properties.particleRadius])
const stars = poolManager.getPool('stars')

function handleChangeUpdateProperties () {
    getProperties()
    poolManager.refresh('stars', properties.particleCount, [canvas, properties.particleMaxVelocity, properties.particleRadius])
}

function getProperties(){
    properties.particleCount = document.querySelector('#count').value
    properties.particleMaxVelocity = document.querySelector('#velocity').value
}

window.onresize = function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

function reDrowBackground() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function reDrowParticles(){
    stars.map(item => {
        item.position()
        item.reDrow()
    })
}

function loop(){
    reDrowBackground()
    reDrowParticles();
    requestAnimationFrame(loop);
}

loop()