
import React from 'react';
import '../../overall.css'
import Navbar from '../../components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    
    <div className="mt-4 bg-c">
        <Navbar/>
      <header className="text-center">
        <h1 className='t-center'>Welcome to My School</h1>
      </header>
      <main>
        <section className="mb-4">
          <h2>About Us</h2>
          <p>
            This is our school.
          </p>
        </section>
        <section className="mb-4">
          <h2>News and Events</h2>
          <p>
            Stay tuned for the latest updates and events happening at our school.
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
