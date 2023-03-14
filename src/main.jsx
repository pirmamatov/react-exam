import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import i18n from './components/localization/i18n';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers/reducers'

const store = createStore(reducers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
