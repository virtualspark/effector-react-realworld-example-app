import { URLS, NavLink } from 'shared/library/router';

import { NavItem } from 'shared/ui';

export const LogoutLinks: React.FC = () => {
  return (
    <>
      <NavItem>
        <NavLink exact className="nav-link" to={URLS.ROOT}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={URLS.LOGIN}>
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={URLS.REGISTRATION}>
          Sign Up
        </NavLink>
      </NavItem>
    </>
  );
};
