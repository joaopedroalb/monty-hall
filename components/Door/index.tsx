import DoorModel from '../../model/DoorModel'
import Reward from '../Reward'
import styles from './index.module.css'

interface DoorProps{
    value:DoorModel
    onChange: (newDoor:DoorModel)=>void
}

export default function Door(props: DoorProps){

    const door = props.value

    const selecionedCss = door.doorSelecioned && !door.doorOpen

    const switchSelection = () => props.onChange(door.switchSelection())
    const openDoorEvent = (e:any) => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    function renderDoorOpen(){
        return(
            <div className={styles.containerDoor}>
                <div className={styles.numberDoor}>{door.doorNumber}</div>
                <div className={styles.handleDoor} onClick={openDoorEvent}></div>
            </div>
        )
    }

    function renderReward(){
        if(door.doorHasReward){
            return (
                <div className={styles.rewardContainer}>
                    <Reward/>
                </div>
            )
        }
            return false;
        
    }

    return(
        <div className={styles.areaDoor}>
            <div className={!selecionedCss? styles.frameDoor : styles.frameDoorSelected} onClick={switchSelection}>
            {door.doorOpen ? renderReward(): renderDoorOpen()}
            </div>
            <div className={styles.floorDoor}>
            </div>
        </div>
    )
}