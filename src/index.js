import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Blogs from './Pages/Blogs';
import NoPage from './Pages/Nopage';
import BlogPost from './Pages/BlogPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    { path: '/', element: <App /> },
    { path: '*', element: <NoPage /> },
    {path: '/blogs', element: <Blogs/>},
    {path: '/blogs/:blog', element: <BlogPost/>},
  ]

}]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
