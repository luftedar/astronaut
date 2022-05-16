import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/configureStore';
import App from '../../pages/App';

describe('App page is working', () => {
  test('Renders App', () => {
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    const tree = render(
      <Provider store={store}>
        {isChrome
         && <App />}
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
