// src/components/FeesPage.js
import React from 'react';
import '../../overall.css'
import Navbar from '../../components/Navbar/Navbar';

const FeesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4 t-center">Fees Structure of NV School </h2>
        <div className="row">
          {[1, 2, 3, 4, 5].map((classNumber) => (
            <div key={classNumber} className="col-md-4">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h3>Class {classNumber}</h3>
                </div>
                <div className="card-body">
                  <p>Tuition Fee: ₹5,000 per semester</p>
                  <p>Books and Materials: ₹1,000 per semester</p>
                  <p>Uniform: ₹800 per semester</p>
                  <p>Total: ₹6,800 per semester</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeesPage;

