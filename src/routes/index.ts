import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import { Route } from '@/types/interfaces';

export const router: Route[] = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/',
    enabled: true,
    component: HomePage,
  },
  {
    key: 'about-route',
    title: 'About',
    path: '/about',
    enabled: true,
    component: AboutPage,
  },
];

export default router;
