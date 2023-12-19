import React from 'react'
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/navbar.module.css'; 


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div><Image src={logoImage} alt="React Logo" className={styles.logo_png}  /></div>
                <div className={styles.logo_title}>TANU PRO</div>     
            </div>
        </div>
    )
}

export default Navbar;