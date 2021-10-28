import styles from "./index.module.css"

export default function Reward(){
    return(
        <div className={styles.rewardBg}>
            <div className={styles.rewardTop}></div>
            <div className={styles.rewardBody}></div>
            <div className={styles.rewardTie1}></div>
            <div className={styles.rewardTie2}></div>
        </div>
    )
}