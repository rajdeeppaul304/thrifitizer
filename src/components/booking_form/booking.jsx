import DatePicker from "react-datepicker";
import React from "react";
import { Formik, Form, Field } from 'formik';

// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/style.css";


const BookingForm = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="booking-modal">
      <div className="modal-content">
        <h4>Book a Call</h4>
        <Formik
          initialValues={{ name: "", email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = "Required";
            if (!values.email) errors.email = "Required";
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log({
              ...values,
              selectedDate
            });
            alert("Booking submitted!");
            resetForm();
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label>Name</label>
                <Field name="name" />
                {errors.name && touched.name && <div>{errors.name}</div>}
              </div>

              <div>
                <label>Email</label>
                <Field name="email" type="email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>

              <div>
                <label>Pick a Date & Time</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>

              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </Form>
          )}
        </Formik>
      </div>
      <style jsx>{`
        .booking-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
};


export default BookingForm;