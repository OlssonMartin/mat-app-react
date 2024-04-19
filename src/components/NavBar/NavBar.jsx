import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';  

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navSection}> 
            </div>
                <Link to="/" className={styles.navName}>Fridelli</Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Hem</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
