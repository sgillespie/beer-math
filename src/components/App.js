import React from 'react';

import AppNav from '../components/AppNav.js';
import GristCalculator from '../components/grist-calculator.js';
import './App.css';

export default function() {
  return (
    <div>
      <AppNav />
      <GristCalculator />
    </div>
  );
}
