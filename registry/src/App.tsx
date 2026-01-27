import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import DetailsPage from './pages/details/DetailsPage';
import searchLoader from './pages/search/SearchLoader';
import detailsLoader from './pages/details/detailsLoader';
import featuredPackagesLoader from './pages/home/featuredPackagesLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: featuredPackagesLoader
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader
      }
    ]
  }
]);

function App() {
  
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
