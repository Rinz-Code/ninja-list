import Metadata from '../comps/Metadata';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <Metadata title={`Ninjas Listing | Home`}  description={`Ninjas are ninjas.Our Ninjas Coding the net Ninja`}/>
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>Ninjas are ninjas.Ninjas do ninja.Well these ninjas do net ninja</p>
            <p className={styles.text}>ninja is amazing mainly the <h3>Net Ninja</h3></p>
            <Link href="/ninjas">
                <a className={styles.btn}>See Ninja Listing</a>
            </Link>
        </div>
    </>
  )
}
