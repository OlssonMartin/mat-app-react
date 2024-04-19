import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Fridelli - vi har allt</p>
        <p>Kontakt: Fridelli@google.com</p>
      </div>
    </footer>
  );
}

export default Footer;
