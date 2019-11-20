import React, { Suspense } from 'react';
import './index.css';

const Artists = React.lazy(() => import('./Artists'));

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Artists />
        </Suspense>
      </div>
    );
  }
}
