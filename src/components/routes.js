import { lazy } from 'react';

// import Home from './Home';
// import Users from './Users';
// import UserDetails from './UserDetails';
// import HomeWorks from './HomeWorks';
// import About from './About';

// import Loadable from './Loadable';

const Home = lazy(() => import('./Home' /* webpackChunkName: "home" */));
const Users = lazy(() => import('./Users' /* webpackChunkName: "users" */));
const UserDetails = lazy(() =>
  import('./UserDetails' /* webpackChunkName: "user-details" */),
);
const HomeWorks = lazy(() =>
  import('./HomeWorks' /* webpackChunkName: "about" */),
);

const About = lazy(() => import('./About' /* webpackChunkName: "about" */));

const routes = [
  {
    name: 'Home',
    path: '/',
    showInMenu: true,
    isExact: true,
    component: Home,
  },
  {
    name: 'Users',
    path: '/users-page',
    showInMenu: true,
    isExact: true,
    component: Users,
  },
  {
    name: 'User Details',
    path: '/users-page/:userId',
    showInMenu: false,
    isExact: false,
    component: UserDetails,
  },
  {
    name: 'Home Works',
    path: '/home-works',
    showInMenu: true,
    isExact: false,
    component: HomeWorks,
  },
  {
    name: 'About',
    path: '/about',
    showInMenu: true,
    isExact: false,
    component: About,
  },
];

export default routes;
