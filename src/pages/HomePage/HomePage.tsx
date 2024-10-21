import { Link } from "react-router-dom"
import Navbar from "../../shared/components/navbar/Navbar"
import styles from './HomePage.module.css'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Get Expert <span>Medical</span> Consultation!</h1>
          <p>
            Our doctors provide expert medical advice and consultation. Get in
            touch with our team to discuss.
          </p>
          <div className={styles.button}>
            <Link to={'/appointment'}><button>New Appointment</button></Link>
          </div>
        </div>
        <div className={styles.consultation_image}>
          <img
            src="https://doctoraltos.com/hs-fs/hubfs/doctora.png?width=275&height=358&name=doctora.png" 
            alt="Doctor"
          />
        </div>
      </div>
    </>
  )
}

export default HomePage