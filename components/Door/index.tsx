import DoorModel from '../../model/DoorModel'
import styles from './index.module.css'

interface DoorProps{
    value:DoorModel
    onChange: (newDoor:DoorModel)=>void
}

export default function Door(props: DoorProps){

    const door = props.value

    const switchSelection = () => props.onChange(door.switchSelection())

    return(
        <div className={styles.areaDoor} onClick={switchSelection}>
            <div className={!door.doorSelecioned? styles.frameDoor : styles.frameDoorSelected}>
                <div className={styles.containerDoor}>
                    <div className={styles.numberDoor}>{door.doorNumber}</div>
                    <div className={styles.handleDoor}></div>
                </div>
            </div>
            <div className={styles.floorDoor}>
            </div>
        </div>
    )
}