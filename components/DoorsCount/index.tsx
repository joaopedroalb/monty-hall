import styles from "./index.module.css"

interface DoorsCountProps{
    type:"select"|'qtde'
    doorsCount?:number
    text:string
    value:number
    onChange:(newValue:number)=>void
}

export default function DoorsCount(props:DoorsCountProps){
    const dec = () =>{
        props.onChange(props.value>1?props.value-1:1);
    }

    const inc = () => {
        // 1. caso seja undefined é porque vai adicionar porta então não vai ter doorsCount
        // 2. caso nao seja undefined é porque vai escolher qual porta deve ser premiada então não pode ser maior do que o 
        // numero atual de portas

        if(props.doorsCount===undefined||(props.doorsCount !== undefined&&props.value<props.doorsCount)){
            props.onChange(props.value+1);
        }
    }

    const btnTxt = (onClickStr:'dec'|'inc') =>{
        if(onClickStr=='dec')
            return props.type=='qtde' ? '-':'<'
        return props.type=='qtde' ? '+':'>'
    }

    return(
        <div className={styles.container}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={dec}>{btnTxt('dec')}</button>
                <button className={styles.btn} onClick={inc}>{btnTxt('inc')}</button>
            </div>
        </div>
    )
}