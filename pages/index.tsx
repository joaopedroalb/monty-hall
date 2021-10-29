import type { NextPage } from 'next'
import { useState } from 'react'
import Door from '../components/Door'
import Reward from '../components/Reward'
import DoorModel from '../model/DoorModel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [d1,setD1] = useState(new DoorModel(13,true,false,true))

  return (
    <div className={styles.container}>
      <Door door={d1}/>
      <Door door={new DoorModel(213,true,true,true)}/>
    </div>
  )
}

export default Home
