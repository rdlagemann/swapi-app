import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 1vw;

  @media only screen and (min-width: 768px) {
    padding: 0 5vw;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 10vw;
  }

  @media only screen and (min-width: 2560px) {
    padding: 0 20vw;
  }
`;

/**
 * It keeps content inside a limited width container, based on viewport
 */
export const Container = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
