import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../api/auth";
import { useInput } from "../../hooks/useInputs";
import Button from "../common/Button";
import Input from "../common/Input";

function Login() {
  const token = localStorage.getItem("token");
  const [inputs, handleInputs] = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSudmit = async (e) => {
    e.preventDefault();

    const { token } = await login(inputs);

    if (token) {
      navigate("/");
    }
  };

  if (token) return <Navigate to="/" />;

  return (
    <Container>
      <form onSubmit={handleSudmit}>
        <h2>로그인</h2>
        <InputWrapper>
          <Input
            type="text"
            placeholder="메일입력"
            name="email"
            onChange={handleInputs}
          />
          <Input
            type="password"
            placeholder="비번입력"
            name="password"
            onChange={handleInputs}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button>로그인</Button>
          <Button bgColor="skyblue" onClick={() => navigate("/auth/signup")}>
            회원가입
          </Button>
        </BtnWrapper>
      </form>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 340px;
  width: 100%;
  background-color: #fff;
  padding: 40px 10px 60px;
  box-shadow: 2px 2px 2px 1px rgba(116, 116, 116, 0.2),
    2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
`;

const BtnWrapper = styled.div`
  text-align: center;
  button + button {
    margin-top: 3px;
  }
`;
const InputWrapper = styled.div`
  text-align: center;
  margin: 15px 0 10px;
  input + input {
    margin-top: 4px;
  }
`;

export default Login;
