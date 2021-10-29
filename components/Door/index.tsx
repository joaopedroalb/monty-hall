import DoorModel from '../../model/DoorModel'
import styles from './index.module.css'

interface DoorProps{
    door:DoorModel
}

export default function Door(props: DoorProps){

    const {door} = props

    return(
        <div className={styles.areaDoor}>
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