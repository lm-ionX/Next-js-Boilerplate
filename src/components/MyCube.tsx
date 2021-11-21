import React from 'react';

import { Cube } from 'react-motion-components';

type MyState = {
  size: number; // like this
};

export default class MyCube extends React.Component<MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    size: 1000,
  };

  render() {
    return <Cube size={this.state.size} index="front" />;
  }
}
