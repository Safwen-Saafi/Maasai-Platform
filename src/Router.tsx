import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SignPage } from './pages/Sign.page';
import { NewsPage } from './pages/News.page';
import { AboutPage } from './pages/About.Page';
import { LiveChartPage } from './pages/LiveChart.page';
import { SmartPage } from './pages/Smart.page';
import { EconomicPage } from './pages/Economic.page';
import { CurrencyPage } from './Currency.page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/currency',
    element: <CurrencyPage />,
  },
  {
    path: '/calendar',
    element: <EconomicPage />,
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
  },
  {
    path: '/livechart',
    element: <LiveChartPage />, // Route to About Page
  },
  {
    path: '/forexscreen',
    element: <SmartPage />, // Route to About Page
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}

