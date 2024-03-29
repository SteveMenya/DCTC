import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './root'
import HomePage from './pages/homepage';
import NewUser from './pages/newuserpage'

const root = ReactDOM.createRoot(document.getElementById('root'));
const newUserHandler = (newUserData) => {
  console.log('in index.js')
  console.log(newUserData)
}

const router = createBrowserRouter( [
  {path:'/', element: <Root/>,
    children:[
      {path:'', element: <HomePage/>},
      // {path:'', element: <AboutPage/>}
      {path:'newUser', element: <NewUser onNewUser={newUserHandler}/>}
    ]
    }]
  )
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

