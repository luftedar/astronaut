import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import TurkishText from '../components/TurkishText';

describe('TurkishText page is working', () => {
  test('Renders TurkishText', () => {
    const tree = render(
      <Provider store={store}>
        <TurkishText />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
