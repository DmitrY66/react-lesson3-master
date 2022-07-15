import React from 'react';
import ComponentClass from './components/ClassComponent';
// import Lifecycle from './components/LifeCycle';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <ComponentClass min={1} max={10} />
        {/* <Lifecycle prop='methed'/> */}
      </div>
    );
  }
}
