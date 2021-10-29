import DoorModel from '../../model/DoorModel'
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

    return(
        <div className={styles.areaDoor}>
            <div className={!selecionedCss? styles.frameDoor : styles.frameDoorSelected} onClick={switchSelection}>
            {door.doorOpen ? false: renderDoorOpen()}
            </div>
            <div className={styles.floorDoor}>
            </div>
        </div>
    )
}