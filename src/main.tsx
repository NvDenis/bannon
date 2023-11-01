import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/homepage.tsx';
import CategoryPage from './pages/categorypage.tsx';
import DetailProductPage from './pages/detailProductpage.tsx';

import { Provider } from 'react-redux'
import { store } from './redux/store.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Provider store={store}>
        <App />
      </Provider>
    ,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: ':categoryName/',
        element: <CategoryPage />,
      },
      {
        path: 'hat/:slug',
        element: <DetailProductPage />
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
