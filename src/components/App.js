import React from 'react';
import { Content, Header, Layout, Navigation } from 'react-mdl/lib/Layout';

import GristCalculator from './GristCalculator';
import RecipeTargets from './RecipeTargets';

export default function() {
  return (
    <Layout>
      <Header title="🍺+🍺=🍻">
        <Navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Navigation>
      </Header>

      <Content>
        <div className="page-content">
          <RecipeTargets />
          <GristCalculator />
        </div>
      </Content>
    </Layout>
  );
}
