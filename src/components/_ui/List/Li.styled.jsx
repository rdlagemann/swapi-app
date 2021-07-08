import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLi = styled.li`
  padding: 16px 12px;
  list-style-type: none;
  margin-bottom: 0;

  :not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    ${({ hover }) =>
      hover &&
      `
      cursor: pointer; 
      background: #ddd;
    `}
  }
`;

/**
 * Custom list item
 */
export const Li = ({ children, ...props }) => (
  <StyledLi {...props}>{children}</StyledLi>
);

Li.propTypes = {
  /**
   * Adds hover effect
   */
  hover: PropTypes.bool,
};

Li.defaultProps = {
  hover: false,
};

export default Li;
