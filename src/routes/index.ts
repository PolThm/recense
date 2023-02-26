import HomePage from '@/pages/HomePage';
import MyArchivesPage from '@/pages/MyArchivesPage';
import NewCensusPage from '@/pages/NewCensusPage';
import StatisticsPage from '@/pages/StatisticsPage';
import { Route } from '@/types/interfaces';

export const router: Route[] = [
  {
    key: 'home-route',
    title: 'Accueil',
    path: '/',
    component: HomePage,
  },
  {
    key: 'statistics-route',
    title: 'Statistiques',
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    key: 'my-archives-route',
    title: 'Mes archives',
    path: '/my-archives',
    component: MyArchivesPage,
  },
  {
    key: 'new-census-route',
    title: 'Recensement',
    path: '/new-census',
    component: NewCensusPage,
  },
];

export const newRouter = [
  {
    key: 'home-route',
    title: 'Accueil',
    path: '/',
    element: HomePage,
  },
  {
    key: 'statistics-route',
    title: 'Statistiques',
    path: '/statistics',
    element: StatisticsPage,
  },
  {
    key: 'my-archives-route',
    title: 'Mes archives',
    path: '/my-archives',
    element: MyArchivesPage,
  },
  {
    key: 'new-census-route',
    title: 'Recensement',
    path: '/new-census',
    element: NewCensusPage,
  },
];

export default router;
