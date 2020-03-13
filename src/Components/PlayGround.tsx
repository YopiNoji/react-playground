import React from 'react';

import HelloMessage from './HelloMessage'
import Counter from './Counter'
import Board from './Board'

interface Props {}
interface State {}
class PlayGround extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <HelloMessage name={'aa'} />
        <Counter />
        <Board />
      </div>
    );
  }
}
export default PlayGround;
