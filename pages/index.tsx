import type { NextPage } from 'next'
import { useState } from 'react'
import Door from '../components/Door'
import DoorModel from '../model/DoorModel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [d1,setD1] = useState(new DoorModel(13,false,false,false))

  return (
    <div className={styles.container}>
      <Door value={d1} onChange={newDoor=>setD1(newDoor)}/>
    </div>
  )
}

export default Home
