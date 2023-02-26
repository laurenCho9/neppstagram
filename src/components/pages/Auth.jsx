import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    margin: 3px 0;
  }
`;

export default Auth;
