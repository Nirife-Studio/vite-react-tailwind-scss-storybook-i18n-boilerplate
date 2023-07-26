import PropTypes from 'prop-types';

function Button({ content }) {
  return <div>{content}</div>;
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
