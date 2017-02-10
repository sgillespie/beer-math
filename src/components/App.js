import React from 'react';
import { Content, Header, Layout, Navigation, Drawer } from 'react-mdl/lib/Layout';

import GristCalculator from './GristCalculator';
import RecipeTargets from './RecipeTargets';

export default function() {
  return (
    <Layout fixedHeader>
      <Header title="🍺+🍺=🍻">
        <Navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Navigation>
      </Header>
	  
      <Drawer title="🍺+🍺=🍻">
        <Navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Navigation>
      </Drawer>
	  
      <Content>
        <div className="page-content">
          <RecipeTargets />
          <GristCalculator />
        </div>
      </Content>
    </Layout>
  );
}
