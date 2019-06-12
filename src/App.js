// Exernal Dependencies
import React from 'react';
import './App.css';

// Local Dependencies
// import Comp1 from './components/Comp1';
// import Comp2 from './components/Comp2';
// import Comp3 from './components/Comp3';
// import Comp4 from './components/Comp4';

// Component Definition
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          ReactJS Dallas User Group
        </h4>
        <p>
          June 2019 @ Call-Em-All in Frisco
        </p>
        <a
          className="App-link"
          href="https://www.call-em-all.com/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call-Em-All is hiring
        </a>
        <span
          role="img"
          style={{
            padding: '12px 0',
          }}
        >
          😍
        </span>
      </header>
      {/* <Comp1 /> */}
      {/* <Comp2 /> */}
      {/* <Comp3 /> */}
      {/* <Comp4 /> */}
    </div>
  );
}

export default App;
