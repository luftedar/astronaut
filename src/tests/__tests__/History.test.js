import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/configureStore';
import History from '../../components/History';

describe('History page is working', () => {
  test('Renders History', () => {
    const tree = render(
      <Provider store={store}>
        <History />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
