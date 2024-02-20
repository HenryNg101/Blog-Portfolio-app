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
import Home from './pages/home';

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
        element: <Navigate to="/about" replace={true} />,
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'home',
        element: <Navigate to="/about" replace={true} />,
      },
      {
        path: 'projects',
        element: <Projects/>
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
