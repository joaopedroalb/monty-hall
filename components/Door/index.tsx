import styles from './index.module.css'

export default function Door(){
    return(
        <div className={styles.areaDoor}>
            <div className={`${styles.frameDoor} ${styles.frameDoorSelected}`}>
                <div className={styles.containerDoor}>
                    <div className={styles.numberDoor}>13</div>
                    <div className={styles.handleDoor}></div>
                </div>
            </div>
            <div className={styles.floorDoor}>
            </div>
        </div>
    )
}