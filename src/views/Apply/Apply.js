
import React from 'react';
import './Apply.css'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ApplyPage = () => {
  return (
    <div className="apply">
      <Navbar />
      <header>
        <h1>Apply to <span className='bl-c'>NV School</span></h1>
      </header>
      <main>
        <div className="container mt-4">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Why do you want to join our school?</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ApplyPage;
