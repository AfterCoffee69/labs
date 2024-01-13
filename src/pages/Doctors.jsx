import React, { useState, useEffect } from 'react';
import DoctorsItem from '../components/DoctorsItem';
import Footer from '../components/Footer';
import doctorsData from './doctorsData.json'
import './../styles/doctors.css'


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData)
  }, []);


  if (doctors.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="doctors_page-container">
        {doctors.map(doctor => (
          <DoctorsItem key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <Footer />
    </>

  );
}

export default Doctors;