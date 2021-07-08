import PropTypes from "prop-types";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  ${({ shadow }) => shadow && `box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)`}
`;

/**
 * Custom unordered list
 */
export const Ul = ({ children, ...props }) => (
  <StyledUl {...props}>{children}</StyledUl>
);

Ul.propTypes = {
  /**
   * Adds shadow effect
   */
  shadow: PropTypes.bool,
};

Ul.defaultProps = {
  shadow: false,
};

export default Ul;
