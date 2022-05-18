import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../redux/configureStore';
import LanguageSelect from '../components/LanguageSelect';
import { changeInputLanguage, changeOutputLanguage } from '../redux/languagesStore';

describe('LanguageSelect page is working', () => {
  test('Renders LanguageSelect', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch,
    }));
    const tree = render(
      <Provider store={store}>
        <LanguageSelect
          languages={[{
            code: 'en',
            name: 'English',
          }]}
          type="inputValue"
          changeLanguage={(value) => {
            if (value === 'inputValue') {
              useDispatch.mockedDispatch(changeInputLanguage(value));
            } else {
              useDispatch.mockDispatch(changeOutputLanguage(value));
            }
          }}
        />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
