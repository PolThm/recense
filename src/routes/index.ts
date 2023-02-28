import HomePage from '@/pages/HomePage';
import MyArchivesPage from '@/pages/MyArchivesPage';
import NewCensusPage from '@/pages/NewCensusPage';
import StatisticsPage from '@/pages/StatisticsPage';
import { Routes } from '@/types/enums';
import { Route } from '@/types/interfaces';

const { Home, MyArchives, NewCensus, Statistics } = Routes;

export const router: Route[] = [
  {
    key: 'home-route',
    title: 'Accueil',
    path: Home,
    component: HomePage,
  },
  {
    key: 'statistics-route',
    title: 'Statistiques',
    path: Statistics,
    component: StatisticsPage,
  },
  {
    key: 'my-archives-route',
    title: 'Mes archives',
    path: MyArchives,
    component: MyArchivesPage,
  },
  {
    key: 'new-census-route',
    title: 'Recensement',
    path: NewCensus,
    component: NewCensusPage,
  },
];

export default router;
