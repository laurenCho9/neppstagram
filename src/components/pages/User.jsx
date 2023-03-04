import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { patchProfile } from "../../api/auth";
import { fetchUser } from "../../redux/user";

function User() {
  const { user, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  if (isLoading) return <div>로딩 중...</div>;

  const handleProfile = async (e) => {
    const data = await patchProfile(e.target.files[0]);
    dispatch(fetchUser(data));
  };
  return (
    <Container>
      <ImgBox htmlFor="profile">
        <img src={user.profile_url} alt=" 프로필이미지" />
      </ImgBox>
      <input
        type="file"
        accept="image/*"
        id="profile"
        style={{ display: "none" }}
        onChange={handleProfile}
      />
      <UserName>{user.name}</UserName>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const ImgBox = styled.label`
  width: 200px;
  height: 200px;
  overflow: hidden;

  border: 2px solid #eee;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const UserName = styled.h3``;
export default User;
