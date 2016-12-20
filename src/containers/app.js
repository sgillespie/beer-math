import React from 'react';

import AppNav from '../components/app-nav.js';
import GristCalculator from '../components/grist-calculator.js';
import './app.css';

export default function() {
  return (
    <div>
      <AppNav/>
      <GristCalculator/>
    </div>
  );
}
