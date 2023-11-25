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
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx';
import OrderPage from './pages/orderpage.tsx';
import HistoryPage from './pages/historypage.tsx';



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
        path: 'category/:categoryName/',
        element: <CategoryPage />,
      },
      {
        path: 'history/',
        element: <HistoryPage />,
      },
      {
        path: 'order/',
        element: <OrderPage />,
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
