import { useState } from 'react'
import Door from '../components/Door'
import { createDoors, refreshDoors } from '../functions/Doors'
import DoorModel from '../model/DoorModel'
import styles from '../styles/Game.module.css'

import Link from "next//link"


export default function Game(){
    const [doors,setDoors] = useState(createDoors(6,6))

    function renderDoors(){
      return doors.map((e:DoorModel)=>{
        return <Door value={e} onChange={newDoor=> setDoors(refreshDoors(doors,newDoor))} key={e.doorNumber}/>
      })
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.doorsContainer}>
          {renderDoors()}
        </div>
        <div className={styles.btnContainer}>
          <Link href="/">
            <button>Reiniciar o jogo</button>
          </Link>
        </div>
      </div>
    )
}