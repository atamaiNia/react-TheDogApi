import Select from 'react-select';
import PropTypes from 'prop-types';

export const BreedSelect = ({ breeds, isLoading, onSelect }) => {
  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));

  const handleChange = option => onSelect(option.value);

  const colorStyles = {
    control: styles => ({ ...styles, border: '2px solid grey' }),
  };

  return (
    <Select
      options={options}
      styles={colorStyles}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

BreedSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
