import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Link from "next//link"
import Card from '../components/Card'
import DoorsCount from '../components/DoorsCount'
import { useState } from 'react'

const Home: NextPage = () => {

  const [doorsCount, setDoorsCount] = useState(3);
  const [prizedDoor, setPrizedDoor] = useState(1);

  return (
    <div className={styles.container}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <DoorsCount text="Qtde Portas" 
                      value={doorsCount} 
                      onChange={newCount => setDoorsCount(newCount)} />
        </Card>
      </div>

      <div>
        <Card>
          <DoorsCount text="Porta Premiada" 
                      value={prizedDoor} 
                      doorsCount={doorsCount}
                      onChange={newPrizedDoor => setPrizedDoor(newPrizedDoor)} />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/Game/${doorsCount}/${prizedDoor}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>

    </div>
  )
}

export default Home
