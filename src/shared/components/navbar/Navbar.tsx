import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <section className={styles.navbar_left}>
                <div className={styles.logo}>
                    <h1>Medical <span>Doctor</span></h1>
                </div>
            </section>
            <ul className={styles.navbar_menu}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/listappointments'}>Appointments</Link></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <section className={styles.navbar_right}>
                <button>Login</button>
            </section>
        </nav>
    );

}

export default Navbar