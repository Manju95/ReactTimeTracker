/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>
          Home
        </span>
      </Link>
    </NavItem>
    {/* <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/recipe') && 'active'}`} to="/recipes">
        <i className="icon-notebook" />
        {' '}
        <span>
          Recipes
        </span>
      </Link>
    </NavItem> */}
    {/* <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/timer') && 'active'}`} to="/timer">
        <i className="icon-notebook" />
        {' '}
        <span>
          Timer
        </span>
      </Link>
    </NavItem> */}
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/task-report') && 'active'}`} to="/task-report">
        <i className="icon-notebook" />
        {' '}
        <span>
          Report
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/time-tracker') && 'active'}`} to="/time-tracker">
        <i className="icon-notebook" />
        {' '}
        <span>
          Time
        </span>
      </Link>
    </NavItem>

  </div>
);

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>
        {SidebarNavItems()}
      </Nav>
    </Col>
  </div>
);

export { Sidebar, SidebarNavItems };
