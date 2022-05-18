import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import Loader from '../components/Loader';

describe('Loading page is working', () => {
  test('Renders Loading', () => {
    const tree = render(
      <Provider store={store}>
        <Loader />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
