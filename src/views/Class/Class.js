
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ClassPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4 t-center">Classes and Academic Programs</h2>
        <div className="row">
          {[1, 2, 3, 4, 5].map((classNumber) => (
            <div key={classNumber} className="col-md-4">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h3>Class {classNumber}</h3>
                </div>
                <div className="card-body">
                  <p>
                    Class {classNumber} focuses on building foundational knowledge and fostering a love for learning in young minds.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ClassPage;
