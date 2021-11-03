import { ReactFragment } from "react"
import styles from "./index.module.css"

interface CardProps{
    bgColor?:string
    children?:ReactFragment
}

export default function Card(props:CardProps){
    return(
        <section className={styles.cardBg}
                style={{
                    backgroundColor:props.bgColor?props.bgColor:"#fff"
                }}
        >
            {props.children}
        </section>
    )
}