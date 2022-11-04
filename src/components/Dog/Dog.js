import PropTypes from 'prop-types';
import { StyledWrapper } from './Dog.styled';

export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament, life_span } = breeds[0];

  return (
    <StyledWrapper>
      <img
        src={url}
        alt={name}
        width="320"
        height="290"
        style={{
          height: 290,
          objectFit: 'cover',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
        }}
      />
      <p style={{ fontWeight: '700', textTransform: 'uppercase' }}>{name}</p>
      <p>{bred_for}</p>
      <p>{temperament}</p>
      <p>{life_span}</p>
    </StyledWrapper>
  );
};

Dog.propTypes = {
  dog: PropTypes.object,
};
