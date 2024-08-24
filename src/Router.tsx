import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SignPage } from './pages/Sign.page';
import { NewsPage } from './pages/News.page';
import { AboutPage } from './pages/About.Page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign',
    element: <SignPage />, // Route to About Page
  },
  {
    path: '/news',
    element: <NewsPage />, // Route to About Page
  },
  {
    path: '/about',
    element: <AboutPage />, // Route to About Page
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}

