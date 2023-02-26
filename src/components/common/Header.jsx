import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Neppstagram</Logo>
        <Input type="text" placeholder="검색" />
        <Gnb>
          <ul>
            <li>
              <Link to="/">
                <AiOutlineHome size={24} />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <AiOutlineSearch size={24} />
              </Link>
            </li>
            <li>
              <Link to="/edit">
                <AiOutlineEdit size={24} />
              </Link>
            </li>
            <li>
              <Link to="/user">
                <AiOutlineUser size={24} />
              </Link>
            </li>
          </ul>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #a3a3a3;
  background-color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`;
const Logo = styled.h1``;

const Input = styled.input``;

const Gnb = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`;

export default Header;
