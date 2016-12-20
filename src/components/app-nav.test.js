import { shallow } from 'enzyme';
import { Brand } from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import React from 'react';

import AppNav from './app-nav';

it('renders', () => {
  const nav = shallow(<AppNav />);
  expect(nav).toBeDefined();
});

it('has brand header', () => {
  const nav = shallow(<AppNav />);
  expect(nav.find(Brand)).toHaveLength(1);
});

it('has nav items', () => {
  const nav = shallow(<AppNav />);
  expect(nav.find(NavItem).length).toBeGreaterThan(1);
});
