import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SystemRoutes } from './modules/routes';
import { store } from '../redux/store/index';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SystemRoutes />
    </Provider>
  </React.StrictMode>
);
