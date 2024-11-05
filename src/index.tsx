import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import ErrorPage from './pages/error';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Resume from './pages/resume';

const rootElement = document.getElementById('root');

//TODO: Replace the default page to /home later on, right now, this is just temporary replacement.
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <About/>,
      },
      {
        path: 'about',
        element: <Navigate to="/" replace={true} />
      },
      {
        path: 'home',
        element: <Navigate to="/" replace={true} />,
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'resume',
        element: <Resume/>
      }
    ]
  },
]);

if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={routerConfig} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(undefined);
