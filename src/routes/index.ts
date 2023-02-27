import HomePage from '@/pages/HomePage';
import MyArchivesPage from '@/pages/MyArchivesPage';
import NewCensusPage from '@/pages/NewCensusPage';
import StatisticsPage from '@/pages/StatisticsPage';
import { Routes } from '@/types/enums';
import { Route } from '@/types/interfaces';

export const router: Route[] = [
  {
    key: 'home-route',
    title: 'Accueil',
    path: Routes.Home,
    component: HomePage,
  },
  {
    key: 'statistics-route',
    title: 'Statistiques',
    path: Routes.Statistics,
    component: StatisticsPage,
  },
  {
    key: 'my-archives-route',
    title: 'Mes archives',
    path: Routes.MyArchives,
    component: MyArchivesPage,
  },
  {
    key: 'new-census-route',
    title: 'Recensement',
    path: Routes.NewCensus,
    component: NewCensusPage,
  },
];

export default router;
