import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import HomePage from './views/Home/Home';
import ApplyPage from './views/Apply/Apply';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
"path": "/",
"element": <HomePage/>
    },
    {
        "path": "/apply",
        "element": <ApplyPage/>
        
     }
])


root.render(<RouterProvider router={router} />);


