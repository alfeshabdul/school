// src/components/StaffPage.js
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const StaffPage = () => {
  // Sample staff data with image URLs
  const staffMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Principal',
      description: 'Oversees the overall administration of the school.',
      imageUrl: 'https://example.com/john-doe.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Teacher',
      description: 'Teaches English and Literature to Class 5.',
      imageUrl: 'https://example.com/jane-smith.jpg',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Teacher',
      description: 'Instructs students in Mathematics and Science.',
      imageUrl: 'https://example.com/bob-johnson.jpg',
    },
    // Add more staff members as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Our Dedicated Staff</h2>
        <div className="card-deck">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="card">
              <img src={staff.imageUrl} className="card-img-top" alt={`${staff.name} Image`} />
              <div className="card-header bg-primary text-white">
                <h3>{staff.name}</h3>
              </div>
              <div className="card-body">
                <p className="card-text">Position: {staff.position}</p>
                <p className="card-text">{staff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
