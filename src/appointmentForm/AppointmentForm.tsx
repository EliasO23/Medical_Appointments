import { useForm } from "react-hook-form";
import styles from "./AppointmentForm.module.css"
import { AppointmentData } from "../shared/interfaces/AppointmentData.interfaces";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase/firebase'


const AppointmentForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentData>();

    const onSubmit = async (data: AppointmentData) => {

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "appointments"), {
            name: data.name,
            date: data.date,
            time: data.time,
            reason: data.reason,
            comment: data.comment
        });
        console.log(docRef);

        reset();

        alert('La cita se creo correctamente');
        
    }

    return (
        <div className={styles.container}>
            <h1>Create Appointment</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.formGroup} ${styles.gr1}` }>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder='Type your fullname'
                        {...register('name', { required: true })}
                    />
                    {
                        errors.name?.type === 'required' && <span>Name is required</span>
                    }
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        placeholder='Type datetime'
                        {...register('date', { required: true })}
                    />
                    {
                        errors.date?.type === 'required' && <span>Date is required</span>
                    }
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        placeholder='Type time'
                        {...register('time', { required: true })}
                    />
                    {
                        errors.time?.type === 'required' && <span>Date is required</span>
                    }
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="reason">Reason</label>
                    <input
                        type="text"
                        placeholder='Type reason'
                        {...register('reason', { required: true })}
                    />
                    {
                        errors.reason?.type === 'required' && <span>Reason is required</span>
                    }
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="comment">Comment</label>
                    <input
                        type="text"
                        placeholder='Type comment'
                        {...register('comment')}
                    />

                </div>
                <div className={styles.btn}>
                    <button type='submit'>Create</button>
                </div>
            </form>

        </div>
    )
}

export default AppointmentForm