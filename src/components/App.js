import React from 'react';
import { Content, Header, Layout, Navigation, Drawer } from 'react-mdl/lib/Layout';

import GrainContainer from '../containers/GrainContainer';
import RecipeTargetsContainer from '../containers/RecipeTargetsContainer';

export default function () {
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
          <RecipeTargetsContainer />
          <GrainContainer />
        </div>
      </Content>
    </Layout>
  );
}
