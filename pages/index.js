import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Starwars from './starwars'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by Zayani" />
        <link rel="icon" href="" />
      </Head>
        <Starwars/>
    </div>
  )
}
