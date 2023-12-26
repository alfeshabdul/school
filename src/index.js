import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import HomePage from './views/Home/Home';
import ApplyPage from './views/Apply/Apply';
import StaffPage from './views/Staff/Staff';
import ClassPage from './views/Class/Class';
import FeesPage from './views/Fees/Fees';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
"path": "/",
"element": <HomePage/>
    },
    {
        "path": "/apply",
        "element": <ApplyPage/>
        
     },
     {
      "path": "/class",
      "element": <ClassPage/>
      
   },
   {
    "path": "/staff",
    "element": <StaffPage/>
    
 },
 {
  "path": "/fees",
  "element": <FeesPage/>
  
},
])


root.render(<RouterProvider router={router} />);


