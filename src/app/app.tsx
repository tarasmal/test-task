import { Outlet, ReactLocation, Route, Router } from '@tanstack/react-location';
import { CenteredLayout } from '~/components';
import { Optimize1, Optimize2, Ranges, Refactor1, Refactor2 } from '~/pages';
import { Header } from './header';
import LastTask from '~/pages/LastTask/LastTask';

const Welcome = () => (
  <CenteredLayout className="gap-4">
    <div className="text-3xl">Welcome to 24Slides test task!</div>
    <div>Explore pages and their code to understand what we can improve here :)</div>
  </CenteredLayout>
);

const reactLocation = new ReactLocation();

const routes: Route[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'refactor-1',
    element: <Refactor1 />,
  },
  {
    path: 'refactor-2',
    element: <Refactor2 />,
  },
  {
    path: 'optimize-1',
    element: <Optimize1 />,
  },
  {
    path: 'optimize-2',
    element: <Optimize2 />,
  },
  {
    path: 'ranges',
    element: <Ranges />,
  },
  {
    path: 'last-task',
    element: <LastTask />
  }
];

export const App = () => (
  <Router location={reactLocation} routes={routes}>
    <Header />
    <Outlet />
  </Router>
);
