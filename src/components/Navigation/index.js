import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const Navigation = () => (
  <div className="navigation">
    {routes.map(({ path, name, isExact, showInMenu }) =>
      showInMenu ? (
        <NavLink
          key={name}
          className="link"
          activeClassName="active-link"
          exact={isExact}
          to={path}
        >
          {name}
        </NavLink>
      ) : null,
    )}
  </div>
);

export default Navigation;
