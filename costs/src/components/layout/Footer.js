import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2023
        </p>

        <p className={styles.credits}><span>Você pode encontrar esse projeto no canal do YouTube "Hora de Codar".</span></p>
    </footer>

    )
}

export default Footer