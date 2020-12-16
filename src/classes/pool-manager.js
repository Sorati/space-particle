export default class PoolManager {
    constructor(){
        this.pool = {}
        this.saveSettings = {}
    }
    
    getPool(name) {
        return this.pool[name]
    }

    create(name = undefined, value = 0, item = null) {
        this.pool[name] = []
        this.saveSettings[name] = Object.assign({}, item) 
        for(let i = 0; i < value; i++){
            this.pool[name].push(item)
        }
    }

    refresh(name, value, item) {        
        if(value > this.pool[name].length) {
            for(let i = 0; i < value; i++){
                this.pool[name][i] = Object.assign(this.saveSettings[name], this.pool[name][i], item)
            }
        } else if(value < this.pool[name].length){
            const difference = this.pool[name].length - value
            for(let i = 0; i < difference; i++){
                this.pool[name].pop()
            }
            for(let i = 0; i < value; i++){
                this.pool[name][i] = Object.assign(this.saveSettings[name], this.pool[name][i], item)
            }
        } else if(value === this.pool[name].length){
            for(let i = 0; i < value; i++){
                this.pool[name][i] = Object.assign(this.saveSettings[name], this.pool[name][i], item)
            }
        }
    }

    delete(name){
        delete this?.pool[name]
        delete this?.saveSettings[name]
    }
}