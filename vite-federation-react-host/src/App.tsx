import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
const Button = React.lazy(() => import('button/Button'));

const Settings = React.lazy(() => import('settings/Settings'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <React.Suspense fallback="Loading App...">
          
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <React.Suspense fallback="Loading App...">
          <Settings />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
