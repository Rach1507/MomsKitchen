
import './App.css';

import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import DetailedView from './components/DetailedView/DetailedView';
import Articles from './components/Articles/Articles';






const router = createBrowserRouter([
  { path: '/MomsKitchen', element: <HomePage /> },
  { path: '/recipes', element: <DetailedView /> },
  { path: '/about', element: <DetailedView /> },

  { path: '/articles', element: <Articles />},

]);



function App() {

  return <RouterProvider router={router} />;


}



export default App;
