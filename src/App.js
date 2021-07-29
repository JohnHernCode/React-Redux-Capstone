import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store';


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>Welcome to React</p>
          </header>
        </div>
      </Provider>
  );
}

export default App;
