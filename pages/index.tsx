import type { NextPage } from 'next'
import Door from '../components/Door'
import Reward from '../components/Reward'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Door/>
    </div>
  )
}

export default Home
