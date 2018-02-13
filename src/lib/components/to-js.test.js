import { fromJS } from 'immutable';
import { createShallow } from 'material-ui/test-utils';

import toJs from './to-js';

const shallow = createShallow();

describe('to-js', () => {
  const Component = toJs(() => <div />);
  const props = {
    a: fromJS({
      b: 1,
    }),

    b: 2,
  };

  let component;
  beforeEach(() => {
    component = shallow(
      <Component {...props} />
    );
  });

  describe('toJS', () => {
    it('unwraps immutable props', () => {
      component
        .prop('a')
        .should.deep.equal({ b: 1 });
    });

    it('leaves js props alone', () => {
      component
        .prop('b')
        .should.equal(2);
    });
  });
});
