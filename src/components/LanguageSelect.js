import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LanguageSelect = ({
  languages, changeLanguage, type,
}) => {
  const [langValue, setLangValue] = useState(
    type === 'outputValue'
      ? 'tr'
      : 'en',
  );
  return (
    <select
      name={type}
      id={type}
      onChange={(e) => {
        changeLanguage(type, e.target.value);
        setLangValue(e.target.value);
      }}
      value={langValue}
    >
      {
            languages.map((language) => (
              <option
                value={language.code}
                key={language.code}
              >
                {language.name}
              </option>
            ))
          }
    </select>
  );
};

LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  changeLanguage: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default LanguageSelect;
