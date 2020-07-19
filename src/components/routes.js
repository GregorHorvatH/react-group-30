import { lazy } from 'react';

const Home = lazy(() =>
  import('../components/Home' /* webpackChunkName: "home-page" */),
);
const Movies = lazy(() =>
  import('../components/Movies' /* webpackChunkName: "movies-page" */),
);
const UserInfo = lazy(() =>
  import('../components/UserInfo' /* webpackChunkName: "user-info-page" */),
);
const LogIn = lazy(() =>
  import('../components/LogIn' /* webpackChunkName: "log-in-page" */),
);
const SignUp = lazy(() =>
  import('../components/SignUp' /* webpackChunkName: "sign-up-page" */),
);

const routes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    needsAuth: false,
    showInMenu: true,
    component: Home,
  },
  {
    label: 'Movies',
    path: '/movies',
    exact: false,
    needsAuth: true,
    showInMenu: true,
    component: Movies,
  },
  {
    label: 'User Info',
    path: '/user-info',
    exact: false,
    needsAuth: true,
    showInMenu: true,
    component: UserInfo,
  },
  {
    label: 'Log In',
    path: '/login',
    exact: false,
    needsAuth: false,
    showInMenu: false,
    component: LogIn,
  },
  {
    label: 'Sign Up',
    path: '/signup',
    exact: false,
    needsAuth: false,
    showInMenu: false,
    component: SignUp,
  },
];

export default routes;
