import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'><Link href='/'>Logo</Link></div>
            <ul className={styles.navgrid}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar