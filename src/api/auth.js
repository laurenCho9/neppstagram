import axios from "axios";

export const authAxios = axios.create({
  baseURL: "http://101.101.218.43/users",
});

//로컬스토리지에 토큰이 저장되어 있다면 헤더에 저장
const token = localStorage.getItem("token");
if (token) {
  authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const signUp = async (form) => {
  try {
    const { data } = await authAxios.post("", form);
    return data;
  } catch (e) {
    console.log(e);
    alert("입력 양식을 확인하시오.");
  }
};

export const login = async (form) => {
  try {
    const { data } = await authAxios.post("/signin", form);

    //로그인 성공시 헤더에 토큰값 저장.
    authAxios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);

    return data;
  } catch (e) {
    alert("이메일 혹은 비밀번호를 확인해주세요.");
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await authAxios.get("/current");
    console.log(data);
    return data;
  } catch (e) {}
};

export const patchProfile = async (file) => {
  try {
    //파일 서버에 보내기 위해서 FormData 를 이용.
    const form = new FormData();
    //FormData.프로토타입.append("키", "값");
    form.append("profile", file);

    const { data } = await authAxios.patch("/profile", form);

    return data;
    // axios.patch("/profile");
  } catch (e) {
    console.log(e);
  }
};
