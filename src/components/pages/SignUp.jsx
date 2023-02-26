import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/auth";
import { useInput } from "../../hooks/useInputs";
import Button from "../common/Button";
import Input from "../common/Input";

function SignUp() {
  const [inputs, handleInputs] = useInput({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success } = await signUp(inputs);
    if (success) {
      alert("회원가입에 성공했습니다.");
      navigate("/auth/login");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름입력"
            name="name"
            onChange={handleInputs}
          />
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
          <Button>회원가입</Button>
          <Button
            bgColor="red"
            type="button"
            onClick={() => navigate("/auth/login")}
          >
            취소
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

export default SignUp;
