import React from 'react'
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/loginnavbar.module.css'; 


const LoginNavbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div><Image src={logoImage} alt="React Logo" className={`me-2 ${styles.logo_png}`}/></div>
                <div className={styles.logo_title}>TANU PRO</div>     
            </div>
        </div>
    )
}

export default LoginNavbar;