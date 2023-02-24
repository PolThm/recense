import CensusPage from '@/pages/CensusPage';
import DashboardPage from '@/pages/DashboardPage';
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
    path: '/census',
    enabled: true,
    component: CensusPage,
  },
  {
    key: 'dashboard-route',
    title: 'Tableau de bord',
    path: '/dashboard',
    enabled: true,
    component: DashboardPage,
  },
];

export default router;
