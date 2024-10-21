import AppointmentForm from "../appointmentForm/AppointmentForm"
import Navbar from "../shared/components/navbar/Navbar"
import '../App.css'


const CreateAppointmentPage = () => {
  return (
    <>
        <Navbar/>
        <section className="form">
          <AppointmentForm/>
        </section>
    </>
  )
}

export default CreateAppointmentPage