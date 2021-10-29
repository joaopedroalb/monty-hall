import type { NextPage } from 'next'
import { useState } from 'react'
import Door from '../components/Door'
import { createDoors } from '../functions/Doors'
import DoorModel from '../model/DoorModel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [d1,setD1] = useState(new DoorModel(13,false,false,false))

  const myDoors = createDoors(5,2);

  return (
    <div className={styles.container}>
      <Door value={d1} onChange={newDoor=>setD1(newDoor)}/>
      {
        myDoors.map((e:DoorModel,i:number)=>{
          return(
            <Door value={e} onChange={newDoor=>setD1(newDoor)} key={e.doorNumber}/>
          )
        })
      }
    </div>
  )
}

export default Home
