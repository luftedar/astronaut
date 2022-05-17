import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {isChrome
        ? <App />
        : (
          <h1 className="isChrome">
            This App Can Only Run In Chrome Browser
            <a
              href="https://
            www.google.com/chrome/?brand=YTUH&gclsrc=aw.ds&gclid=Cj0KCQjwyYKUBhDJARIsAMj9lkGCZvBHsNGylTthYo2KNpthm_jyHcHmLQz6oH59xXiLo8OwTkCbiA8aAgjVEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              Check Chrome
            </a>
          </h1>
        )}
    </Provider>
  </React.StrictMode>,
);
