import { useState } from 'react';
import DatePicker from 'react-datepicker';  // React DatePicker component - npm install react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // styles for DatePicker
import { useForm } from 'react-hook-form';  // React useForm hook - npm install react-hook-form 


function Modal({ isOpen, onClose, services }) {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [selecteDate, setSelectedDate] = useState(null);

    const onSubmit = data => {
        console.log(data);
        onClose();
    };

    return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className='modalContent'>
            <button className='closeBtn' onClick={ onClose }> Close</button>
            <h2>Book an appointment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='formGroup'>
                    <label>Pet Owner Full Name</label>
                    <input {...register("fullName", { required: true })} />
                    {errors.fullName && <span className='errorMsg'>This field is required</span>}
                </div>

                <div className='formGroup'>
                    <label>Phone Number</label>
                    <input type='tel' {...register('phoneNumber', {required: true})} />
                    {errors.phoneNumber && <span className='errorMsg'>This field is required</span>}
                </div>

                <div className='formGroup'>
                    <label>Pet Owner Email</label>
                    <input type='email' {...register('email', {required: true})} />
                    {errors.email && <span className='errorMsg'>This field is required</span>}
                </div>

                <div className='formGroup'>
                    <label>Service</label>
                    <select {...register('service', {required: true})} >
                    <option value="">Select a service</option>
                    {services && services.map((service, index) => (
                        <option key={index} value={service.name}>{service.name} - ${service.price}</option>
                    ))}
                    </select>
                    {errors.service && <span className='errorMsg'>This field is required</span>}
                </div>
                
                <div className='formGroup'>
                    <label>Date</label>
                    <DatePicker selected={selecteDate} onChange={date => setSelectedDate(date)} />
                </div>
                <button type='submit'>Book Appointment</button>

            </form>
        </div>
    </div>
    );
};

export default Modal