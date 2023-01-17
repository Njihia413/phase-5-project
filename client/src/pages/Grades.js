import React from 'react';
import Box from "./Box";
import GradesForm from './GradesForm';
import Navbar from "../components/Navbar";

const Grades = () => {
  return (
    <div className='grades'>
        <div className='bg-grades'>
      <Navbar />
      <Box/>
      <GradesForm />
      
      </div>
    </div>
  )
}

export default Grades
