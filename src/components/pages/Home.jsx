import { useEffect } from "react";
import { getCurrentUser } from "../../api/auth";

function Home() {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return <div>홈 컴포넌트</div>;
}
export default Home;
