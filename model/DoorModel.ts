export default class DoorModel{
    #number:number
    #hasReward:boolean
    #selecioned:boolean
    #open:boolean

    constructor(number:number,hasReward:boolean,selecioned:boolean,open:boolean){
        this.#number = number
        this.#hasReward = hasReward
        this.#selecioned = selecioned
        this.#open = open
    }
    
    get doorNumber():number{
        return this.#number;
    }

    get doorHasReward():boolean{
        return this.#hasReward;
    }

    get doorSelecioned():boolean{
        return this.#selecioned;
    }

    get doorOpen():boolean{
        return this.#open;
    }

    markOff(){
        const selecioned = false
        return new DoorModel(this.#number,this.#hasReward,selecioned,this.#open)
    }

    switchSelection(){
        const selecioned = !this.#selecioned
        return new DoorModel(this.#number,this.#hasReward,selecioned,this.#open)
    }

    openDoor(){
        const open = true
        return new DoorModel(this.#number,this.#hasReward,this.#selecioned,open)
    }
}