import React, { Component } from 'react';
import './App.css';
import router from './router'
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            { 
              router
            }
          </BrowserRouter>

        </div>
      </Provider>
    );
  }
}

export default App;