import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Link from "next//link"
import Card from '../components/Card'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>

      <div>
        <Card></Card>
        <Card bgColor="#28a085">
          <Link href={`/Game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>

    </div>
  )
}

export default Home
