import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ProductProvider} from "./Context"
//import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
     <React.StrictMode>
      <App />
     </React.StrictMode>
  </ProductProvider>,
 document.getElementById('root')
);
serviceWorker.unregister();
