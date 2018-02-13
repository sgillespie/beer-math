import React from 'react';
import curry from 'ramda/src/curry';
import map from 'ramda/src/map';
import { Iterable } from 'immutable';

const toJs = curry((WrappedComponent, props) => {
  const propsJs = map(
    prop => (Iterable.isIterable(prop) ? prop.toJS() : prop),
    props);

  return (
    <WrappedComponent {...propsJs} />
  );
});

export default toJs;
