import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { AppointmentData } from "../shared/interfaces/AppointmentData.interfaces";
import styles from './ListAppointment.module.css'


const ListAppointment = () => {

    const [appointments, setAppointments] = useState<AppointmentData[]>([]);

    const getAppointments = async () => {
        try {
            const appointmentsCollection = await getDocs(collection(db, 'appointments'));
            const data = appointmentsCollection.docs.map((doc) => (
                { ...doc.data(), id: doc.id }

            )) as AppointmentData[];

            console.log(data);
            setAppointments(data);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getAppointments()

    }, [])

    return (
        <section className={styles.container}>
            <h1>List Appointments</h1>
            <h3>Gire su dispositivo para observar la lista</h3>
            <table className={styles.table}>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.name}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.comment}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListAppointment