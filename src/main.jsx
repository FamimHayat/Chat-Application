
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { dbConfig } from '../fbConfig.js'
import { Provider } from 'react-redux'

import store from './redux-store/store.js'



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
