import { FC } from 'react';

export interface Route {
  key: string;
  title: string;
  path: string;
  component: FC;
}
