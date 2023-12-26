import React from 'react';
import './Apply.css';
import Navbar from '../../components/Navbar/Navbar';

const ApplyPage = () => {
  return (
    <div className="apply">
        <Navbar/>
      <header>
        <h1>Apply to My School</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
};

export default ApplyPage;
