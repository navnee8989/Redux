import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './redux/store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>

    <App />
</Provider>,

  document.getElementById('root')
);
