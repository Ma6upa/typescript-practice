import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card width='200px' height='200px'>
        <button>childrenBtn</button>
        <div>
          <span>
            childrenText
          </span>
        </div>
      </Card>
    </div>
  );
}

export default App;
