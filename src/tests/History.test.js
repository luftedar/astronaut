import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import History from '../components/History';

describe('History page is working', () => {
  test('Renders History', () => {
    const languages = {
      curretInput: 'en',
      currentOutput: 'tr',
      languages: [{
        code: 'en',
        name: 'English',
      },
      {
        code: 'tr',
        name: 'Turkish',
      },
      ],
      loading: false,
    };
    const tree = render(
      <Provider store={store}>
        <History languages={languages} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
