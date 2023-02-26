import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function MainSection() {
  return (
    <Container>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a3a3a3;
`;

const OutletWrapper = styled.div`
  max-width: 900px;
  background-color: #fff;
  margin: 0 auto;
  flex: 1;
  width: 100%;
`;
export default MainSection;
