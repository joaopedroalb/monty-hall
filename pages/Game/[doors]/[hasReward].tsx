import { useEffect, useState } from 'react'
import Door from '../../../components/Door'
import { createDoors, refreshDoors } from '../../../functions/Doors'
import DoorModel from '../../../model/DoorModel'
import styles from '../../../styles/Game.module.css'

import { useRouter } from 'next/dist/client/router'

import Link from "next//link"


export default function Game(){
    const router = useRouter();

    const [doors,setDoors] = useState<Array<DoorModel>>([])

    useEffect(()=>{
      const doorsNumber = router.query.doors===undefined ? 0:router.query.doors
      const doorWithReward = router.query.hasReward===undefined ? 0:router.query.hasReward
      setDoors(createDoors(+doorsNumber,+doorWithReward));
    },[router?.query])

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