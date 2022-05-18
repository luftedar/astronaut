import PropTypes from 'prop-types';

const SelectLanguage = ({ name, languages }) => (
  <select name={name}>
    {
    languages.map((language) => (
      <option
        value={language.code}
        key={language.name}
      >
        {language.name}
      </option>
    ))
}
  </select>
);

SelectLanguage.propTypes = {
  languages: {
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectLanguage;
