import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton
} from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
  brandName: string;
  routes: Array;
  action: React.ReactNode;
}
export const Navbar = (props: WithChildrenProps<NavbarProps>) => {
  const { brandName, routes, action } = props;
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="blue-gray"
          className="capitalize"
        >
          <Link to={path} className="flex items-center gap-1 p-1 font-normal">
            {icon &&
              React.createElement(icon, {
                className: 'w-[18px] h-[18px] opacity-50 mr-1'
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-3">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            variant="small"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
          >
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        {action}
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {action}
        </div>
      </MobileNav>
    </MTNavbar>
  );
};

Navbar.defaultProps = {
  brandName: 'Admin Dashboard'
};

Navbar.displayName = '/src/widgets/layout/navbar.jsx';

export default Navbar;
