import React from 'react';
import ReactDOM from 'react-dom/client';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Resume from './components/resume/Resume.jsx';
let myRoutes=createBrowserRouter([
    {path:"/",element:<App/>,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"projects",element:<Projects/>},
        {path:"resume",element:<Resume/>},
        {path:"*",element:<Navigate to="/" replace/>}
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={myRoutes}/>);
