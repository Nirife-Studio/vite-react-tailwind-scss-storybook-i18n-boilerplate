import PropTypes from 'prop-types';

function Button({ content }) {
  return <div className='bg-teal-300'>{content}</div>;
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
