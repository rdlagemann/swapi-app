import PropTypes from "prop-types";

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

function Dialog({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }

  return <div>{children}</div>;
}

export default Dialog;
