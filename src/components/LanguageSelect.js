import React from 'react';
import PropTypes from 'prop-types';

const LanguageSelect = ({
  languages, changeLanguage, type,
}) => (
  <select
    name={type}
    id={type}
    onChange={(e) => {
      changeLanguage(type, e.target.value);
    }}
  >
    {
            languages.map((language) => (
              <option
                value={language.code}
                key={language.code}
                selected={type === 'outputValue'
                && language.name === 'Turkish' && true}
              >
                {language.name}
              </option>
            ))
          }
  </select>
);

LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  changeLanguage: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default LanguageSelect;
