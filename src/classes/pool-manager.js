export default class PoolManager {
    constructor(){
        this.pool = {}
        this.saveSettings = {}
        this.saveOBJ = {}
        this.props = {}
    }
    
    getPool(name) {
        return this.pool[name]
    }

    create(name = undefined, value = 0, item = null, props = null) {
        this.pool[name] = []
        this.props[name] = props
        this.saveOBJ[name] = item
        
        for(let i = 0; i < value; i++){
            this.pool[name].push(new this.saveOBJ[name](...props))
        }
    }

    refresh(name, value, props) {
        if(value >= this.pool[name].length) {
            for(let i = 0; i < value; i++){
                this.pool[name][i] = new this.saveOBJ[name](...props)
            }
        } else if(value < this.pool[name].length){
            const difference = this.pool[name].length - value
            for(let i = 0; i < difference; i++){
                this.pool[name].pop()
            }
        }
    }

    delete(name){
        delete this?.pool[name]
        delete this?.saveOBJ[name]
        delete this?.props[name]
    }
}