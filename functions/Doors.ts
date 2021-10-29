import { doesNotReject } from "assert";
import DoorModel from "../model/DoorModel";

export function createDoors(qtd:number, selected:number):DoorModel[]{
    const doors:Array<DoorModel> = Array.from({length:qtd},(_,i)=>{
        const num = i+1
        const hasReward = num === selected
        return new DoorModel(num,hasReward,false,false)
    })

    return doors
}