import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import { Route } from '@/types/interfaces';

export const router: Route[] = [
  {
    key: 'home-route',
    title: 'Accueil',
    path: '/',
    enabled: true,
    component: HomePage,
  },
  {
    key: 'census-route',
    title: 'Nouveau recensement',
    path: '/new-census',
    enabled: true,
    component: HomePage,
  },
  {
    key: 'about-route',
    title: 'À propos',
    path: '/about',
    enabled: true,
    component: AboutPage,
  },
];

export default router;
