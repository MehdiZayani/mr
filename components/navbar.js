import Link from 'next/link'
import styles from '../styles/Nav.module.css'
export default function Navbar(){    
  return(
        <div>
             
            
             <nav className={styles.nav}>
                <Link className={styles.a} href="./Starwars">
                   <h1 className="nom">Star Wars</h1></Link>
            <div className={styles.navbar}>
              <Link className={styles.a} href="./Trilogie"><p className={styles.links}>trilogie</p></Link>
              <Link className={styles.a} href="./Prelogie"><p className={styles.links}>prelogie</p></Link>
              <Link className={styles.a} href="./Original"><p className={styles.links}>originale </p></Link>
              <Link className={styles.a} href="./Home-page"><p>Fortnite</p></Link>
              <form>
                 <input type="search" placeholder="Rechercher" className={styles.input}/>
              </form>
           </div>
          </nav>
        
         </div>
)
}
