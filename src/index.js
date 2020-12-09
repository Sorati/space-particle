import "./styles/main.scss";
import PoolManager from './classes/pool-manager'

const poolManager = new PoolManager()

poolManager.create('stars', {
    value: 10,
    particle: 100,
    speed: 0.03
})


// poolManager.delete('stars')