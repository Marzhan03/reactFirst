import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/main.module.css';
import 'C:/DjangoSites/tanuPro/reactFirst/node/my-app/src/components/main/Donut.js' 

const MainNavbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <div><Image src={logoImage} alt="React Logo" className={styles.logo_png}  /></div>
                <div className={styles.logo_title}>TANU PRO</div>
                <Link to="/">Главная</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">О нас</Link>
                <Link to="/">Семье</Link>
                <Link to="/">Школам</Link>
                <Link to="/">Бизнес</Link>
            </div>
            <div>   <DoughnutChart></DoughnutChart>
            

            </div>
        </div>
    )
}

export default MainNavbar;
