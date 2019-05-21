import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { 
  StatelessButton, 
  ClassButton,
  UseStateButton, 
  UseReducerButton,
} from './examples/state';
import { 
  UseEffectButton,
  LifecycleButton,
} from './examples/lifecycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's get pumped to learn about React Hooks!
        </p>
      </header>
      <div className="button-container">
        <section className="og-button-section">
          <div>
            <h2>MySweetButton:</h2>
            <StatelessButton title="Boring Button" />
          </div>
        </section>

        <section className="state-button-section">
          <div>
            <h2>Stateful Class:</h2>
            <ClassButton />
          </div>
          <div>
            <h2>useState():</h2>
            <UseStateButton />
          </div>
          <div>
            <h2>useReducer():</h2>
            <UseReducerButton />
          </div>
        </section>
        
        <section className="lifecycle-section">
          <div>
            <h2>Lifecycle Methods:</h2>
            <LifecycleButton />
          </div>
          <div>
            <h2>useEffect():</h2>
            <UseEffectButton />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
