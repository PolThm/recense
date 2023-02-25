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

export default router;
