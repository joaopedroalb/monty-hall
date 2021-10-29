import type { NextPage } from 'next'
import { useState } from 'react'
import Door from '../components/Door'
import { createDoors, refreshDoors } from '../functions/Doors'
import DoorModel from '../model/DoorModel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [doors,setDoors] = useState(createDoors(5,2))

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
    </div>
  )
}

export default Home
