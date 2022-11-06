import React, { useState, FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  // @ts-expect-error
  console.log("React 12", window.react1)
  // @ts-expect-error
  console.log("React 22", React == window.react1)
  const [a, _] = useState('abc');
  return <p>Hello Studio {a}</p>
};

export default App;
