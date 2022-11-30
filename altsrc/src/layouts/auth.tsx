import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/solid';
import { Routes, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
import routes from '../routes';
import { Navbar, Footer } from '../widgets/layout';

export function Auth() {
  const navbarRoutes = [
    {
      name: 'dashboard',
      path: '/dashboard/home',
      icon: ChartPieIcon
    },
    {
      name: 'profile',
      path: '/dashboard/home',
      icon: UserIcon
    },
    {
      name: 'sign up',
      path: '/auth/sign-up',
      icon: UserPlusIcon
    },
    {
      name: 'sign in',
      path: '/auth/sign-in',
      icon: ArrowRightOnRectangleIcon
    }
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === 'auth' &&
            pages.map(({ path, element, index }) => (
              <Route exact path={path} key={index} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

Auth.displayName = '/src/layout/Auth.jsx';

export default Auth;
