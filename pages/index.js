import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <Head>
            <title>Ninja List | Home</title>
        </Head>
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>Lorem ipsum dolor djj jjssjsjsjj jjjxjjsjjsjsj jjjsjjajsj</p>
            <p className={styles.text}>Lorem ipsum dolor djj jjssjsjsjj jjjxjjsjjsjsj jjjsjjajsj</p>
            <Link href="/ninjas">
                <a className={styles.btn}>See Ninja Listing</a>
            </Link>
        </div>
    </>
  )
}
