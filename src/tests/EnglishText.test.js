import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import EnglishText from '../components/EnglishText';

describe('EnglishText page is working', () => {
  test('Renders EnglishText', () => {
    const tree = render(
      <Provider store={store}>
        <EnglishText text="Hello" />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
