
import React from 'react';
import '../../overall.css'

const HomePage = () => {
  return (
    <div className="container mt-4 bg-c">
      <header className="text-center">
        <h1 className='t-center'>Welcome to My School</h1>
      </header>
      <main>
        <section className="mb-4">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </section>
        <section className="mb-4">
          <h2>News and Events</h2>
          <p>
            Stay tuned for the latest updates and events happening at our school.
          </p>
        </section>
      </main>
      <footer className="text-center mt-4">
        <p>&copy; 2023 My School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
