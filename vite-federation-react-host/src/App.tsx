import Button from 'button/Button';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading App...">
          <Button />
      </React.Suspense>
    </div>
  );
}

export default App;
