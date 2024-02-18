import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`${props.danger && "danger"} ${props.success && "success"}`}
      onClick={props.onClick}
    >
      <i className={`bi bi-${props.iconName}`}></i>
      {props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
};
